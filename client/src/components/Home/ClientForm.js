import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT } from '../../utils/mutations';

// Context and reducer imports
import { UPDATE_CLIENT } from '../../utils/actions';
import { useUserContext } from "../../utils/GlobalState";

function ClientForm(props) {
    // Add context and state
    const [state, dispatch] = useUserContext();
    const [formState, setFormState] = useState();

    const [addClient] = useMutation(ADD_CLIENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addClient({
                variables: {
                    firstName: formState.firstName,
                    lastName: formState.lastName,
                    email: formState.email,
                    phone: formState.phone,
                    unit: formState.unit,
                    number: formState.number,
                    streetName: formState.streetName,
                    streetType: formState.streetType,
                    suburb: formState.suburb,
                    state: formState.state,
                    country: formState.country
                },
            })
            const data = mutationResponse.data.addClient
            // State Update
            dispatch({
                type: UPDATE_CLIENT,
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
                    <input id="phone" placeholder="Phone" name="phone" type="text" className="m-1"
                        onChange={handleChange}
                    />
                    <div>
                        <label><u>Billing Address</u></label>
                        <br />
                        <input id="unit" placeholder="Unit" name="unit" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="number" placeholder="StreetNumber" name="number" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="streetName" placeholder="Billing streetName" name="streetName" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="streetType" placeholder="Billing streetType" name="streetType" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="suburb" placeholder="Billing suburb" name="suburb" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="state" placeholder="Billing state" name="state" type="text" className="m-1"
                            onChange={handleChange}
                        />
                        <input id="country" placeholder="Billing country" name="country" type="text" className="m-1"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-12 col-lg-3 m-1">
                    <button className="btn btn-secondary my-1" type="submit">Submit Step</button>
                </div>
            </form>
        </div>
    );
};

export default ClientForm;
