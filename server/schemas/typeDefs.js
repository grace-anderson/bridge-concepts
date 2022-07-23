const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Address {
    _id: ID
    unit: String
    number: String!
    streetName: String!
    streetType: String!
    suburb: String!
    state: String
    country: String
  }

  type Bridge {
    _id: ID
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
    client: Client
    address: Address
    bridge: Bridge
  }

  type Query {
    users: [User]
    user(id: ID!): User
    projects: [Project]
    project(id: ID!): Project
  }

  type Mutation {
    addUser(name: String!): User
  }
`;

module.exports = typeDefs;
