import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function ClientForm(props) {
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
            <h4><u>Step 2: Enter Client Details</u></h4>
            <form
                className="form-contents-div"
                onSubmit={handleFormSubmit}
            >
                <div className="col-12 col-lg-9 ">
                    <input id="firstName" name="firstName" placeholder="First Name" type="text" className="m-1"
                        onChange={handleChange}
                    />
                    <input id="lastName" placeholder="Last Name" name="lastName" type="text" className="m-1"
                        onChange={handleChange}
                    />
                    <input id="email" placeholder="Email" name="email" type="email" className="m-1"
                        onChange={handleChange}
                    />
                    <input id="phone" placeholder="Phone" name="phone" type="number" className="m-1"
                        onChange={handleChange}
                    />
                    <input id="address" placeholder="Billing Address" name="address" type="text" className="m-1"
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

export default ClientForm;
