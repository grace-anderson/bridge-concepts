import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

// Context and reducer imports
import { UPDATE_USER } from '../utils/actions';
import { useUserContext } from "../utils/GlobalState";

function Login(props) {
  const [state, dispatch] = useUserContext();
  const [formState, setFormState] = useState({ email: '', password: '' });
  // We get React Router's navigate object so we can access and adjust browser history
  const navigate = useNavigate();

  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const data = { ...mutationResponse.data.login.user };
      const token = mutationResponse.data.login.token;
      dispatch({
        type: UPDATE_USER,
        payload: data
      })
      Auth.login(token);
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 form-card-div">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="m-1"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="m-1"
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="col-12 col-lg-3 m-1">
          <button className="btn btn-secondary my-1" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
