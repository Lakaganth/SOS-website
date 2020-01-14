import React from "react";
import { GoogleMap, Marker } from "react-google-maps";

const GoogleMapContainer = () => {
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 13.0289, lng: 80.23949 }}>
      <Marker position={{ lat: 13.030109, lng: 80.203047 }} />
    </GoogleMap>
  );
};

export default GoogleMapContainer;
