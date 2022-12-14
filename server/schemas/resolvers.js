const { User, Project, Client, Bridge, Location } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    client: async () => {
      return Client.find();
    },
    user: async (parent, args) => {
      return User.findOne({ _id: args._id });
    },
    projects: async () => {
      return Project.find();
    },
    project: async (parent, args) => {
      return Project.findOne({ _id: args._id }).populate('bridge').populate('client');
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // User --------------------------------------------------------------------------------------------------
    addUser: async (parent, { firstName, lastName, email, password, type }) => {
      const user = await User.create({ firstName, lastName, email, password, type });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect login details!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect login details!');
      }

      const token = signToken(user);
      return { token, user };
    },
    // Set up mutation so a logged in user can only remove their user and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Project --------------------------------------------------------------------------------------------------
    addProject: async (parent, args) => {
      const project = await Project.create(args);
      // Add to user
      const user = await User.findOneAndUpdate(
        { _id: args.userId },
        { $addToSet: { projects: project._id } },
        { new: true }
      );
      return project
    },
    // Client -----------------------------------------------------------------------
    addClient: async (parent, { projectId, firstName, lastName, email, phone, ...address }) => {
      const client = await Client.create({ firstName, lastName, email, phone, address });
      // Add to project
      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        { client: client._id },
        { new: true }
      );
      return client
    },
    // Bridge
    addBridgeToProject: async (parent, { projectId, type, length, width, loadType, openToSuggestions }) => {
      const bridge = await Bridge.create({ type, length, width, loadType, openToSuggestions, projectId });
      // Add to project
      const project = await Project.findOneAndUpdate(
        { _id: projectId },
        { bridge: bridge._id },
        { new: true }
      );
      return bridge
    },
    addLocationToBridge: async (parent, { bridgeId, lat0, lng0, elev0, lat1, lng1, elev1 }) => {
      const location = await Location.create({ lat0, lng0, elev0, lat1, lng1, elev1 });
      // Add to project
      const bridge = await Bridge.findOneAndUpdate(
        { _id: bridgeId },
        { location: location },
        { new: true }
      );
      return location
    },
  },
};

module.exports = resolvers;
