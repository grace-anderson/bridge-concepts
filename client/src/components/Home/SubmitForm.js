import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProjectForm(props) {

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Database update
        try {
            navigate('/submitted')
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="form-card-div">
            <h4><u>Step 5: Review Your Data and Submit</u></h4>
            <p>Please review your data above, and press the Project Submit Button when ready.</p>
            <form
                className="form-contents-div"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-3 m-1">
                    <button className="btn btn-danger my-1" type="submit">Submit Project</button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;