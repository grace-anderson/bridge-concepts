import React from 'react';
// Import hooks from React Router
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  // We retrieve the current `location` object data from React Router
  const location = useLocation();
  // We get React Router's history object so we can access and adjust browser history
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h5>&copy; {new Date().getFullYear()} - Made by Tim Polo</h5>
        <small>All designs are conceptual only, and are for the purposes of discussion and pricing.
          All designs from this website are NOT FOR CONSTRUCTION, for further information consult with a Structural Engineer
        </small>
      </div>
    </footer>
  );
};

export default Footer;
