import React, { useEffect } from 'react';
import Auth from '../utils/auth'

// Import Components for page
import InfoSection from '../components/Home/InfoSection';
import ProjectForm from '../components/Home/ProjectForm';
import ClientForm from '../components/Home/ClientForm';
import BridgeForm from '../components/Home/BridgeForm';
import LocationForm from '../components/Home/LocationForm';
import SubmitForm from '../components/Home/SubmitForm';

import { useUserContext } from "../utils/GlobalState";

import About from './About'

const Home = () => {
  // Add context and state
  const [state, dispatch] = useUserContext();


  return (
    <main className="bg-Light text-Grey">
      <div>
        {!state.user._id ? (
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
              <SubmitForm />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
