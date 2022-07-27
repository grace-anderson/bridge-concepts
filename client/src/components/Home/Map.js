import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, Autocomplete } from "@react-google-maps/api";
import './map.css'

const Map = function () {
    const [map, setMap] = useState(null)

    const [mapCenter, setMapCenter] = useState({ lat: -30.64075130591417, lng: 152.8562340464637 })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEaBYrXj5DymS6B3z7EFqB1HatbX-KY2Q",
        libraries: ['places']
    });

    if (!isLoaded) {
        return (<div><p>Loading....</p></div>)
    }

    return (
        <div className="map">
            <h2 className="map-h2">Double click to place the bridge.</h2>

            <div>
                <GoogleMap
                    zoom={20}
                    center={mapCenter}
                    mapTypeId='satellite'
                    mapContainerClassName="google-map"
                >
                    <Marker position={mapCenter} />
                </GoogleMap>
            </div>
        </div>
    );
};

export default Map;
