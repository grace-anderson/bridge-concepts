import { gql } from '@apollo/client';

// Login and sign up -----------------------------------------------------------------------------
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
    }
  }
}
`;
export const ADD_USER = gql`
mutation addUser(
  $firstName: String!
  $lastName: String!
  $email: String!
  $password: String!
) {
  addUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    token
    user {
      _id
    }
  }
}
`;

// Database  -----------------------------------------------------------------------------
export const ADD_PROJECT = gql`
mutation addProject($name: String!, $reference: String!) {
  addProject(name: $name, reference: $reference) {
    _id
    name
    reference
  }
}
`;
export const ADD_CLIENT = gql`
mutation addClient($firstName: String!, $lastName: String!, $email: String!, $number: String!, $streetName: String!, $streetType: String!, $suburb: String!, $company: String, $phone: String, $unit: String, $state: String, $country: String, , $projectId: String) {
  addClient(firstName: $firstName, lastName: $lastName, email: $email, number: $number, streetName: $streetName, streetType: $streetType, suburb: $suburb, company: $company, phone: $phone, unit: $unit, state: $state, country: $country, projectId: $projectId) {
    _id
    firstName
    lastName
    address {
      streetName
      streetType
      unit
      number
      suburb
      state
      country
    }
  }
}
`;

export const ADD_BRIDGE_TO_PROJECT = gql`
mutation addBridgeToProject($type: String!, $length: String!, $width: String, $loadType: String, $openToSuggestions: Boolean, $projectId: String) {
  addBridgeToProject(type: $type, length: $length, width: $width, loadType: $loadType, openToSuggestions: $openToSuggestions, projectId: $projectId) {
    _id
    type
    length
    width
    loadType
    openToSuggestions
  }
}
`;
export const ADD_LOCATION_TO_BRIDGE = gql`
mutation addLocationToBridge($lat0: Float, $lng0: Float, $elev0: Float, $lat1: Float, $lng1: Float, $elev1: Float, $bridgeId: String) {
  addLocationToBridge(lat0: $lat0, lng0: $lng0, elev0: $elev0, lat1: $lat1, lng1: $lng1, elev1: $elev1, bridgeId: $bridgeId) {
    lat0
    lng0
    elev0
    lat1
    lng1
    elev1
  }
}
`;