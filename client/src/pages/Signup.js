import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import Select from 'react-select';

// Context and reducer imports
import { UPDATE_USER } from '../utils/actions';
import { useUserContext } from "../utils/GlobalState";

function Signup(props) {
  const [state, dispatch] = useUserContext();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const navigate = useNavigate();

  const userTypeOptions = [
    { value: 'council', label: 'council' },
    { value: 'contractor', label: 'contractor' },
    { value: 'consultant', label: 'consultant' },
    { value: 'government', label: 'government' },
    { value: 'admin', label: 'admin' }
  ]

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        type: formState.type
      },
    });
    const data = { ...mutationResponse.data.addUser.user };
    const token = mutationResponse.data.addUser.token;
    dispatch({
      type: UPDATE_USER,
      payload: data
    })
    Auth.login(token);
    navigate('/')
  };

  const handleTypeChange = (selectedOption) => {
    const { value } = selectedOption;
    setFormState({
      ...formState,
      type: value,
    });
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
          <div className="row">
            <Select className="col-6 my-1" options={userTypeOptions} onChange={handleTypeChange} />
          </div>
          <div className="col-12 col-lg-3 m-1">
            <button className="btn btn-secondary my-1" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
