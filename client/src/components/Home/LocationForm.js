import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';
import Map from './Map';

function LocationForm(props) {
    const [formState, setFormState] = useState();

    return (
        <div className="form-card-div">
            <h4><u>Step 4: Enter Location Details</u></h4>

            <div id="googleMapsDiv">
                <Map />
            </div>

        </div>
    );
};

export default LocationForm;
