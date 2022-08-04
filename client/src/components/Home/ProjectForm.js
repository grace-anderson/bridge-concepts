import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../../utils/mutations';

// Context and reducer imports
import { UPDATE_PROJECT } from '../../utils/actions';
import { useUserContext } from "../../utils/GlobalState";

function ProjectForm(props) {
    // Add context and state
    const [state, dispatch] = useUserContext();
    const [formState, setFormState] = useState();

    const [addProject] = useMutation(ADD_PROJECT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Database update
        try {
            const mutationResponse = await addProject({
                variables: {
                    userId: state.user._id,
                    name: formState.projectName,
                    reference: formState.projectReference
                },
            });
            const data = mutationResponse.data.addProject
            // State Update
            dispatch({
                type: UPDATE_PROJECT,
                payload: data
            })
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="form-card-div">
            <h4><u>Step 1: Enter Project Details</u></h4>
            <form
                className="form-contents-div"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9 ">
                    <input id="projectName" name="projectName" placeholder="Project Name" type="text" className="m-1"
                        onChange={handleChange}
                    />
                    <input id="projectReference" placeholder="Your reference number" name="projectReference" type="text" className="m-1"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12 col-lg-3 m-1">
                    <button className="btn btn-secondary my-1" type="submit">Submit Step</button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;