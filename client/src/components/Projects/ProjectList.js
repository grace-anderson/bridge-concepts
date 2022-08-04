import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useUserContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function ProjectList() {
  const [state, dispatch] = useUserContext();

  const { loading, data } = useQuery(QUERY_PROJECTS);

  if (loading) {

    return <div>Loading...</div>;
  } else if (state.user.type === 'admin') {
    const projectsArray = data.projects;
    console.log(data.projects)

    return (
      <div className="my-2">
        <h2>Projects:</h2>
        {data ? (
          <div className="flex-row">
            {projectsArray
              .map((project) => (
                <ProjectCard
                  _id={project._id}
                  key={project.name}
                  name={project.name}
                  reference={project.reference}
                />
              ))}
          </div>
        ) : (
          <div><p>Loading</p></div>
        )}
      </div>
    );
  } else {
    const projectsArray = data.projects;
    console.log(data.projects)

    return (
      <div className="my-2">
        <h2>Projects:</h2>
        {data ? (
          <div className="flex-row">
            {projectsArray
              .filter((project) => project.userId == state.user._id)
              .map((project) => (
                <ProjectCard
                  _id={project._id}
                  key={project.name}
                  name={project.name}
                  reference={project.reference}
                />
              ))}
          </div>
        ) : (
          <div><p>Loading</p></div>
        )}
      </div>
    );
  }
}
export default ProjectList;
