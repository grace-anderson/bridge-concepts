import React from 'react';

// Import Components for page
import InfoSection from '../components/Home/InfoSection';
import ProjectForm from '../components/Home/ProjectForm';
import ClientForm from '../components/Home/ClientForm';
import BridgeForm from '../components/Home/BridgeForm';
import LocationForm from '../components/Home/LocationForm';

const Home = () => {

  return (
    <main className="bg-Light text-Grey">
      <div id="infoSection">
        <InfoSection />
      </div>
      <div id="formsSection">
        <ProjectForm />
        <ClientForm />
        <BridgeForm />
        <LocationForm />
      </div>
    </main>
  );
};

export default Home;
