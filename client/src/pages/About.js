import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {

  return (
    <div className="container my-1 form-card-div">
      <div>
        <h2><u>Welcome to Bridge Concepts!</u></h2>
        <p>The fast and  easy way to put together a concept bridge design.</p>
        <div className="my-2">
          <p className="d-inline"> Please </p>
          <Link to="/signup" className="d-inline"> Sign Up </Link>
          <p className="d-inline"> Or </p>
          <Link to="/login" className="d-inline"> Login</Link>
          <p className="d-inline"> to begin designing your bridge! </p>
        </div>
      </div>
      <div>
        <h3>How It Works</h3>
        <p>
          Bridge Concepts allows anybody to create a set of concept design drawings,
          which can then be submitted with a grant application, or to a contractor for pricing.
          Login or Signup to start drawing your concept designs.
        </p>
      </div>


    </div>
  );
}

export default About;
