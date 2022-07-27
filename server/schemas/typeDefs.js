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

  type Bridge {
    type: String! # Steel, conc, timber etc
    length: String!
    width: String
    loadType: String
    openToSuggestions: Boolean
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
    lat: Float
    lng: Float
    client: Client
    bridge: Bridge
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
    addUser(firstName: String!, lastName: String!, company: String, email: String!, phone: String, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeUser: User #Note: doesn't need an _id in the body as it uses the context.user._id in the resolver.
    #Projects
    addProject(name: String!, reference: String!): Project
    addClient(firstName: String!, lastName: String!, company: String, email: String!, phone: String, unit: String number: String! streetName: String! streetType: String! suburb: String! state: String country: String): Client
    addBridgeToProject(type: String!, length: String!, width: String, loadType: String, openToSuggestions: Boolean): Bridge
  }
`;

module.exports = typeDefs;
