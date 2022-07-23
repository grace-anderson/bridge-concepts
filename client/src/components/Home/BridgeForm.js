import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { ADD_USER } from '../utils/mutations';

function BridgeForm(props) {
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
            <h4><u>Step 3: Choose a Bridge Type</u></h4>
            <form className="form-contents-div">
                <div className="form-row align-items-center p-2">
                    <div className="col-3 my-1">
                        <label className="mr-sm-2" for="inlineFormCustomSelect"><u>Bridge Type</u></label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="steel">Steel</option>
                            <option value="concrete">Concrete</option>
                            <option value="timber">Timber</option>
                            <option value="boxCulvert">Box Culvert</option>
                            <option value="pipeCulvert">Pipe Culvert</option>
                        </select>
                    </div>
                    <div className="col-3 my-1">
                        <label className="mr-sm-2" for="inlineFormCustomSelect"><u>Bridge Length</u></label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="8m">8 m</option>
                            <option value="10m">10 m</option>
                            <option value="12m">12 m</option>
                            <option value="14m">14 m</option>
                            <option value="20m">20 m</option>
                        </select>
                    </div>
                    <div className="col-3 my-1">
                        <label className="mr-sm-2" for="inlineFormCustomSelect"><u>Load Type</u></label>
                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choose...</option>
                            <option value="sm1600">SM1600</option>
                            <option value="t44">T44</option>
                            <option value="d8Dozer">D8 Dozer</option>
                            <option value="30TonneExcavator">30t Excavator</option>
                            <option value="4wd">4wd Vehicle</option>
                        </select>
                    </div>
                    <div className="col-auto my-1">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                            <label className="custom-control-label" for="customControlAutosizing">I am open to suggestions</label>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 m-1">
                        <button className="btn btn-secondary my-1" type="submit">Submit Step</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BridgeForm;