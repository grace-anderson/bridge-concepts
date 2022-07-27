import React from 'react';
import Auth from '../utils/auth'

// Import Components for page
import InfoSection from '../components/Home/InfoSection';
import ProjectForm from '../components/Home/ProjectForm';
import ClientForm from '../components/Home/ClientForm';
import BridgeForm from '../components/Home/BridgeForm';
import LocationForm from '../components/Home/LocationForm';

import About from './About'

const Home = () => {

  return (
    <main className="bg-Light text-Grey">
      <div>
        {!Auth.loggedIn() ? (
          <About />
        ) : (
          <div>
            <div id="infoSection">
              <InfoSection />
            </div>
            <div id="formsSection">
              <ProjectForm />
              <ClientForm />
              <BridgeForm />
              <LocationForm />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
