import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
query projects {
  projects {
    _id
    name
    reference
  }
}
`;

export const QUERY_SINGLE_PROJECT = gql`
query project($_id: ID!) {
  project(_id: $_id) {
    _id
    name
    reference
    bridge {
      type
      length
      width
      loadType
      openToSuggestions
      location {
        lat0
        lng0
        lat1
        lng1
      }
    }
    client {
      firstName
      lastName
      company
      email
      phone
      address {
        unit
        number
        streetName
        streetType
        suburb
        state
      }
    }
  }
}
`;
