import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const AppNavbar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg form-card-div">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link text-Black" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link text-Grey" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-Grey" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-Grey" to="/explorebridges">Explore Bridges</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-Grey" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default AppNavbar;
