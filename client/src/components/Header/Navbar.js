import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

import { useUserContext } from "../../utils/GlobalState";

const AppNavbar = () => {
  // Add context and state
  const [state, dispatch] = useUserContext();
  const logState = () => {
    console.log(state)
  }

  return (
    <div>
      <nav className="form-card-div p-0 my-2">
        <div className="container p-0 m-0" id="navbarNav">
          <ul className="row w-100">
            <li className="px-1 mx-1">
              <Link className="nav-link text-Black" to="/">Home</Link>
            </li>
            <li className="px-1 mx-1">
              <Link className="nav-link text-Grey" to="/projects">Projects</Link>
            </li>
            <li className="px-1 mx-1">
              <Link className="nav-link text-Grey" to="/about">About</Link>
            </li>
            {!state.user._id ? (
              <li className="px-1 mx-1">
                <Link className="nav-link text-Grey" to="/login">Login</Link>
              </li>
            ) : (
              <div>
                <li className="px-1 mx-1">
                  <Link className="nav-link text-Grey" to="/about" onClick={Auth.logout}>Logout</Link>
                </li>
              </div>
            )}
            {!state.user._id ? (
              <li className="px-1 mx-1">
                <Link className="nav-link text-Grey" to="/signup">Sign Up</Link>
              </li>) : (<div></div>)}
            {state.user.type == 'admin' ? (
              <li className="p-1 m-1 text-danger" onClick={logState}>logState</li>) : (<div></div>)}
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default AppNavbar;
