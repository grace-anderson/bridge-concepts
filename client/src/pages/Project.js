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
    console.log(data)
    return (
      <div className="form-card-div">
        <h4><u>{data.project.name}</u></h4>
        <p>Project Reference: {data.project.reference}</p>
        <br />
        <h5><u>Bridge Data</u></h5>
        <p>type: {data.project.bridge?.type || 'Not Given'}</p>
        <p>length: {data.project.bridge?.length || 'Not Given'}</p>
        <p>width: {data.project.bridge?.width || 'Not Given'}</p>
        <p>loadType: {data.project.bridge?.loadType || 'Not Given'}</p>
        <p>openToSuggestions: {data.project.bridge?.openToSuggestions || 'Not Given'}</p>
        <p>location_lat0: {data.project.bridge?.location.lat0 || 'Not Given'}</p>
        <p>location_lng0: {data.project.bridge?.location.lng0 || 'Not Given'}</p>
        <p>location_lat1: {data.project.bridge?.location.lat1 || 'Not Given'}</p>
        <p>location_lng1: {data.project.bridge?.location.lng1 || 'Not Given'}</p>
        <br />
        <h5><u>Client Data</u></h5>
        <p>firstName: {data.project.client?.firstName || 'Not Given'}</p>
        <p>lastName: {data.project.client?.lastName || 'Not Given'}</p>
        <p>company: {data.project.client?.company || 'Not Given'}</p>
        <p>email: {data.project.client?.email || 'Not Given'}</p>
        <p>phone: {data.project.client?.phone || 'Not Given'}</p>
        <p>address:
          {data.project.client?.address.unit || 'Not Given'},
          {data.project.client?.address.number || 'Not Given'},
          {data.project.client?.address.streetName || 'Not Given'},
          {data.project.client?.address.streetType || 'Not Given'},
          {data.project.client?.address.suburb || 'Not Given'},
          {data.project.client?.address.state || 'Not Given'},
        </p>
      </div>
    );
  };
}


export default Project;
