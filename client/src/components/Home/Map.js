import React, { useState, useMemo, useRef, useEffect } from 'react';
import { GoogleMap, useLoadScript, Polyline, GroundOverlay, GroundOverlayProps } from "@react-google-maps/api";

import './map.css'
import PlacesAutocomplete from './PlacesAutocomplete';
import { ADD_LOCATION_TO_BRIDGE } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';

// Context and reducer imports
import { UPDATE_LOCATION } from '../../utils/actions';
import { useUserContext } from "../../utils/GlobalState";

const Map = function () {
    const [formState, setFormState] = useState()
    const [state, dispatch] = useUserContext();
    const [addLocationToBridge] = useMutation(ADD_LOCATION_TO_BRIDGE);

    // Google Maps Variables
    const [map, setMap] = useState(null)
    const options = useMemo(() => ({ clickableIcons: false }), [])
    const mapRef = useRef();
    const [mapCenter, setMapCenter] = useState({ lat: -30.64075130591417, lng: 152.8562340464637 })
    const [polyLinePath, setPolyLinePath] = useState([])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEaBYrXj5DymS6B3z7EFqB1HatbX-KY2Q",
        libraries: ['places']
    });

    const polyLineOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: true,
        editable: true,
        visible: true,
        radius: 30000,
        zIndex: 1
    };

    const bounds = {
        north: -30.740,
        south: -30.640547773894426,
        east: 152.75637,
        west: 152.856378415811
    };



    //Form submits
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Form State", formState)
        // Database update
        try {
            const mutationResponse = await addLocationToBridge({
                variables: {
                    bridgeId: state.bridge._id,
                    lat0: formState.lat0,
                    lng0: formState.lng0,
                    elev0: formState.elev0,
                    lat1: formState.lat1,
                    lng1: formState.lng1,
                    elev1: formState.elev1
                },
            });
            const thisData = mutationResponse.thisData.addLocationToBridge
            // State Update
            dispatch({
                type: UPDATE_LOCATION,
                payload: thisData
            })
        } catch (e) {
            console.log(e);
        }
    };


    const handlePolylineChange = (event) => {
        const thisLat = event.latLng.lat();
        const thisLng = event.latLng.lng();

        switch (event.vertex) {
            case 0:
                setFormState({
                    ...formState,
                    lat0: thisLat,
                    lng0: thisLng,
                    elev0: 0,
                });
                console.log(formState)
                break;
            case 1:
                setFormState({
                    ...formState,
                    lat1: thisLat,
                    lng1: thisLng,
                    elev1: 0,
                });
                console.log(formState)
                break;
            default:
                console.log("Error with latitude and longitude form State")
        }
    };

    function drawPolyline(event) {

        setPolyLinePath([{ lat: event.latLng.lat(), lng: event.latLng.lng() - 0.0001 }, { lat: event.latLng.lat(), lng: event.latLng.lng() + 0.0001 }])
    }

    if (!isLoaded) {
        return (<div><p>Loading....</p></div>)
    } else {

        return (
            <div className="map">
                <h5>1. Search for a nearby address to zoom to the general location.</h5>
                <h5>2. Double click to place the bridge.</h5>
                <h5>3. Then drag the ends to set the bridge centreline</h5>
                <div className="w-100 m-1">
                    {/* Pass a setMapCenter function down to Places (the child) and call it */}
                    <PlacesAutocomplete zoomToSearchAddress={setMapCenter} />
                </div>
                <div className="col-12 col-lg-3 m-1">
                    <button className="btn btn-secondary my-1" type="submit">Search</button>
                </div>
                <div>
                    {/* <ScriptLoaded> */}
                    <GoogleMap
                        zoom={19}
                        center={mapCenter}
                        mapTypeId='satellite'
                        mapContainerClassName="google-map"
                        options={options}
                        onDblClick={drawPolyline}
                    >
                        <Polyline
                            path={polyLinePath}
                            options={polyLineOptions}
                            onMouseUp={handlePolylineChange}
                        />
                        {/* <GroundOverlay
                            key={'url'}
                            url='https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
                            bounds={bounds}
                        /> */}
                    </GoogleMap>
                    {/* </ScriptLoaded> */}
                </div>
                <div className="col-12 col-lg-3 m-1">
                    <button
                        className="btn btn-secondary my-1"
                        onClick={handleFormSubmit}
                    >Submit Step</button>
                </div>
            </div>
        );
    };
}

export default Map;
