import React, { useState } from 'react';
import Select from 'react-select'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BRIDGE_TO_PROJECT } from '../../utils/mutations';

// Context and reducer imports
import { UPDATE_BRIDGE } from '../../utils/actions';
import { useUserContext } from "../../utils/GlobalState";

function BridgeForm(props) {
    // Add context and state
    const [state, dispatch] = useUserContext();
    const [formState, setFormState] = useState();

    const bridgeOptions = {
        type: [
            { value: 'steel', label: 'Steel' },
            { value: 'concrete', label: 'Concrete' },
            { value: 'timber', label: 'Timber' }
        ],
        length: [
            { value: '8', label: '8m' },
            { value: '10', label: '10m' },
            { value: '12', label: '12m' },
            { value: '14', label: '14m' },
            { value: '20', label: '20m' }
        ],
        width: [
            { value: '4.5', label: '4.5m' },
            { value: '7.2', label: '7.2m' }
        ],
        loadType: [
            { value: 'sm1600', label: 'SM1600' },
            { value: 't44', label: 'T44' },
            { value: 'd8Dozer', label: 'D8 Dozer' },
            { value: '30tExcavator', label: '30t Excavator' }
        ]
    }


    const [addBridgeToProject] = useMutation(ADD_BRIDGE_TO_PROJECT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Database update
        console.log(formState)
        try {
            const mutationResponse = await addBridgeToProject({
                variables: {
                    type: formState.type,
                    length: formState.length,
                    width: formState.width,
                    loadType: formState.loadType
                    // openToSuggetions: formState.openToSuggetions
                },
            });
            const data = mutationResponse.data.addBridgeToProject;
            // State Update
            dispatch({
                type: UPDATE_BRIDGE,
                payload: data
            })
        } catch (e) {
            console.log(e);
        }
    }


    const handleTypeChange = (selectedOption) => {
        const { value } = selectedOption;
        setFormState({
            ...formState,
            type: value,
        });
    };
    const handleLengthChange = (selectedOption) => {
        const { value } = selectedOption;
        setFormState({
            ...formState,
            length: value,
        });
    };
    const handleWidthChange = (selectedOption) => {
        const { value } = selectedOption;
        setFormState({
            ...formState,
            width: value,
        });
    };
    const handleLoadTypeChange = (selectedOption) => {
        const { value } = selectedOption;
        setFormState({
            ...formState,
            loadType: value,
        });
    };

    return (
        <div className="form-card-div">
            <div>
                <h4><u>Step 3: Choose a Bridge Type</u></h4>
                <Select options={bridgeOptions.type} onChange={handleTypeChange} />
                <Select options={bridgeOptions.length} onChange={handleLengthChange} />
                <Select options={bridgeOptions.width} onChange={handleWidthChange} />
                <Select options={bridgeOptions.loadType} onChange={handleLoadTypeChange} />
            </div>
            <div className="col-12 col-lg-3 m-1">
                <button className="btn btn-secondary my-1" onClick={handleFormSubmit}>Submit Step</button>
            </div>
        </div>
    );
};

export default BridgeForm;



{/* <form className="form-contents-div">
<div className="form-row align-items-center p-2">
    <div className="col-3 my-1">
        <label className="mr-sm-2"><u>Bridge Type</u></label>
        <select value={bridgeType} name="type" className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={handleBridgeChange}>
            <option value="steel">Steel</option>
            <option value="concrete">Concrete</option>
            <option value="timber">Timber</option>
            <option value="boxCulvert">Box Culvert</option>
            <option value="pipeCulvert">Pipe Culvert</option>
        </select>
    </div>
    <div className="col-3 my-1">
        <label className="mr-sm-2"><u>Bridge Length</u></label>
        <select value={bridgeType} name="length" className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={handleBridgeChange}>
            <option value="8">8 m</option>
            <option value="10">10 m</option>
            <option value="12">12 m</option>
            <option value="14">14 m</option>
            <option value="20">20 m</option>
        </select>
    </div>
    <div className="col-3 my-1">
        <label className="mr-sm-2"><u>Bridge Width</u></label>
        <select value={bridgeType} name="width" className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={handleBridgeChange}>
            <option value="4.5">4.5 m</option>
            <option value="7.2">7.2 m</option>
        </select>
    </div>
    <div className="col-3 my-1">
        <label className="mr-sm-2"><u>Load Type</u></label>
        <select value={bridgeType} name="loadType" className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={handleBridgeChange}>
            <option value="sm1600">SM1600</option>
            <option value="t44">T44</option>
            <option value="d8Dozer">D8 Dozer</option>
            <option value="30TonneExcavator">30t Excavator</option>
            <option value="4wd">4wd Vehicle</option>
        </select>
    </div>
    <div className="col-auto my-1">
        <div className="custom-control custom-checkbox mr-sm-2">
            <input name="openToSuggetions" type="checkbox" className="custom-control-input" id="customControlAutosizing" onChange={handleBridgeChange} />
            <label className="custom-control-label">I am open to suggestions</label>
        </div>
    </div>
    <div className="col-12 col-lg-3 m-1">
        <button className="btn btn-secondary my-1" type="submit">Submit Step</button>
    </div>
</div>
</form> */}