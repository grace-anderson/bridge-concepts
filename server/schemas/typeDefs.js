const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Address {
    unit: String
    number: String!
    streetName: String!
    streetType: String!
    suburb: String!
    state: String
    country: String
  }

  type Location {
    # Takes in two points for a centreline
    lat0: Float
    lng0: Float
    elev0: Float
    lat1: Float
    lng1: Float
    elev1: Float
    x0: Float
    y0: Float
    z0: Float
    x1: Float
    y1: Float
    z1: Float
  }

  type Bridge {
    _id: ID
    type: String! # Steel, conc, timber etc
    length: String!
    width: String
    loadType: String
    openToSuggestions: Boolean
    location: Location
  }
  
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    company: String
    email: String
    phone: String
    type: String
    address: Address
  }

  type Client {
    _id: ID
    firstName: String!
    lastName: String!
    company: String
    email: String!
    phone: String
    address: Address
  }

  type Project {
    _id: ID
    name: String!
    reference: String!
    client: Client
    bridge: Bridge
    userId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    client: [Client]
    user(_id: ID!): User
    projects: [Project]
    project(_id: ID!): Project
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, company: String, email: String!, phone: String, password: String!, type: String): Auth
    login(email: String!, password: String!): Auth
    removeUser: User #Note: doesn't need an _id in the body as it uses the context.user._id in the resolver.
    #Projects
    addProject(userId: String, name: String!, reference: String!): Project
    addClient(firstName: String!, lastName: String!, company: String, email: String!, phone: String, unit: String number: String! streetName: String! streetType: String! suburb: String! state: String country: String, projectId: String): Client
    addBridgeToProject(type: String!, length: String!, width: String, loadType: String, openToSuggestions: Boolean, projectId: String): Bridge
    addLocationToBridge(lat0: Float, lng0: Float, elev0: Float, lat1: Float, lng1: Float, elev1: Float, bridgeId: String): Location
  }
`;

module.exports = typeDefs;
