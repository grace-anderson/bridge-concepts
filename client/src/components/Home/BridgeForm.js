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
        ],
        openToSuggestions: [
            { value: true, label: 'I am open to Suggestions' },
            { value: false, label: 'This is the exact bridge type I want' }
        ]
    }


    const [addBridgeToProject] = useMutation(ADD_BRIDGE_TO_PROJECT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        console.log(state.project._id)
        // Database update
        try {
            const mutationResponse = await addBridgeToProject({
                variables: {
                    type: formState.type,
                    length: formState.length,
                    width: formState.width,
                    loadType: formState.loadType,
                    openToSuggetions: formState.openToSuggetions,
                    projectId: state.project._id
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
    const handleOpenToSuggestionsChange = (selectedOption) => {
        const { value } = selectedOption;
        setFormState({
            ...formState,
            openToSuggestions: value,
        });
    };

    return (
        <div className="form-card-div container">
            <h4><u>Step 3: Choose a Bridge Type</u></h4>
            <div className="row">
                <Select className="col-6 my-1" options={bridgeOptions.type} onChange={handleTypeChange} />
                <Select className="col-6 my-1" options={bridgeOptions.length} onChange={handleLengthChange} />
                <Select className="col-6 my-1" options={bridgeOptions.width} onChange={handleWidthChange} />
                <Select className="col-6 my-1" options={bridgeOptions.loadType} onChange={handleLoadTypeChange} />
                <Select className="col-12 my-1" options={bridgeOptions.openToSuggestions} onChange={handleOpenToSuggestionsChange} />
            </div>
            <div className="col-12 col-lg-3 m-1">
                <button className="btn btn-secondary my-1" onClick={handleFormSubmit}>Submit Step</button>
            </div>
        </div>
    );
};

export default BridgeForm;
