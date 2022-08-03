import React from 'react';
import Auth from '../utils/auth'

// Import Components for page
import ProjectList from '../components/Projects/ProjectList';

import About from './About'

const Projects = () => {

  return (
    <main className="bg-Light text-Grey">
      <div>
        {!Auth.loggedIn() ? (
          <About />
        ) : (
          <div>
            <div id="formsSection">
              <ProjectList />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
