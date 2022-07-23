const { User, Project } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, args) => {
      return User.findOne({ _id: args.id });
    },
    projects: async () => {
      return Project.find();
    },
    project: async (parent, args) => {
      return Project.findOne({ _id: args.id });
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      return User.create(args);
    },
  },
};

module.exports = resolvers;
