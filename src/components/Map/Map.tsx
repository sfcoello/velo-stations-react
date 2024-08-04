import React from 'react'
import GoogleMapReact from 'google-map-react';
import { MapContainerSyled, MarkerContainer } from './Styles';
import { useStations } from '../../context/StationsContext';
import Marker from '../Marker/Marker';
import { Paper } from '@mui/material';


const Map: React.FC = () => {
  const coordinates = {
    lat: 51.22038601791998,
    lng: 4.414753759659805,
  };

  const stations = useStations();

  return (
    <MapContainerSyled>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCusgbvbtg8uyhWI_VkDKjXlcvxmteB_bA' }}
        defaultCenter={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{
        }}
        onChange={(e) => {
          console.log(e);
        }}
        onChildClick={(e) => {
          console.log(e);
        }}
      >

      </GoogleMapReact>
    </MapContainerSyled>
  );
};

export default Map


