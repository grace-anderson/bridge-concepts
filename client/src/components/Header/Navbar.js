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
              <Link className="nav-link text-Grey" to="/explorebridges">Explore Bridges</Link>
            </li>
            <li className="px-1 mx-1">
              <Link className="nav-link text-Grey" to="/about">About</Link>
            </li>
            {!Auth.loggedIn() ? (
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
            {!Auth.loggedIn() ? (
              <li className="px-1 mx-1">
                <Link className="nav-link text-Grey" to="/signup">Sign Up</Link>
              </li>) : (<div></div>)}
            <li className="p-1 m-1 text-danger" onClick={logState}>logState</li>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default AppNavbar;
