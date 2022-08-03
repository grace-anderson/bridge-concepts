import React from 'react';
import { QUERY_SINGLE_PROJECT } from '../utils/queries';
// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Project = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { _id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { _id: _id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <div className="form-card-div">
        <h4><u>{data.project.name}</u></h4>
        <p>{data.project.reference}</p>
      </div>
    );
  };
}


export default Project;
