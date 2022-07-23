import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function LocationForm(props) {
    const [formState, setFormState] = useState();
    // const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // const mutationResponse = await addUser({
        //   variables: {
        //     email: formState.email,
        //     password: formState.password,
        //     firstName: formState.firstName,
        //     lastName: formState.lastName,
        //   },
        // });
        // const token = mutationResponse.data.addUser.token;
        // Auth.login(token);
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
            <h4><u>Step 4: Enter Location Details</u></h4>
            <form
                className="form-contents-div"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9 ">
                    <input id="locationAddress" name="locationAddress" placeholder="Search Address" type="text" className="w-100 m-1"
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

export default LocationForm;
