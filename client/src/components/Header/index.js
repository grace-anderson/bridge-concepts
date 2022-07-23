import React from 'react';
// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import AppNavbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-Black text-Brown mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link className="text-Cream bg-Grey" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            <u>Bridge Concepts</u>
          </h1>
        </Link>
        <AppNavbar />
      </div>
    </header>
  );
};

export default Header;
