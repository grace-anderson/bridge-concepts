import React, { useState, useMemo, useRef } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

function PlacesAutocomplete(props) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            async () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                await setValue(description, false);
                clearSuggestions();

                // Get latitude and longitude via utility functions
                await getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    // set map to this location
                    props.zoomToSearchAddress({ lat: lat, lng: lng })
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={place_id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <div ref={ref} className="w-100 p-2">
            <input className="w-100"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Search for a nearby address..."
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
    );
};

export default PlacesAutocomplete