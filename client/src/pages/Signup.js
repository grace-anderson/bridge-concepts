import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container form-card-div">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit} className="form-contents-div">
        <div className="flex-row form-contents-div">
          <input placeholder="First Name" name="firstName" type="firstName" id="firstName" className="m-1"
            onChange={handleChange}
          />
          <input placeholder="Last Name" name="lastName" type="lastName" id="lastName" className="m-1"
            onChange={handleChange}
          />
          <input placeholder="Company" name="company" id="company" className="m-1"
            onChange={handleChange}
          />
          <input placeholder="Email" name="email" type="email" id="email" className="m-1"
            onChange={handleChange}
          />
          <input placeholder="Password" name="password" type="password" id="pwd" className="m-1"
            onChange={handleChange}
          />
          <input id="phone" placeholder="Phone" name="phone" type="number" className="m-1"
            onChange={handleChange}
          />
          <input id="address" placeholder="Billing Address" name="address" type="text" className="m-1"
            onChange={handleChange}
          />
          <div className="col-12 col-lg-3 m-1">
            <button className="btn btn-secondary my-1" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
