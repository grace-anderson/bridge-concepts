import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';

// Context and reducer imports
import { UPDATE_PROJECT } from '../../utils/actions';
import { useUserContext } from "../../utils/GlobalState";

function ProjectCard(props) {
    // Add context and state
    const [state, dispatch] = useUserContext();
    const [formState, setFormState] = useState();
    return (
        <div className="form-card-div">
            <h4><u>{props.name}</u></h4>
            <p>{props.reference}</p>
            <Link to={`/projects/${props._id}`}>View Project</Link>
        </div>
    );
};

export default ProjectCard;