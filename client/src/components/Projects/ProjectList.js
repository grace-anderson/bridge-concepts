import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { useUserContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECTS } from '../../utils/queries';

function ProjectList() {
  const [state, dispatch] = useUserContext();

  const { loading, data } = useQuery(QUERY_PROJECTS);

  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     (product) => product.category._id === currentCategory
  //   );
  // }
  if (loading) {

    return <div>Loading...</div>;
  } else {
    const projectsArray = data.projects;

    return (
      <div className="my-2">
        <h2>Projects:</h2>
        {data ? (
          <div className="flex-row">
            {projectsArray.map((project) => (
              <ProjectCard
                _id={project._id}
                key={project.name}
                name={project.name}
                reference={project.reference}
              />
            ))}
            <p>testing</p>
          </div>

        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default ProjectList;
