import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {

  return (
    <div className="container my-1 form-card-div">
      <h3>Project Submitted!</h3>
      <p>
        Click <Link to="/" className="d-inline"> here </Link> to add more projects
      </p>
    </div>
  );
}

export default About;
