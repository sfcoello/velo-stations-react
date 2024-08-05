import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import {MapContainerSyled, PaperStyled} from './Styles';
import { useStations } from '../../context/StationsContext';
import Marker from '../Marker/Marker';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Station } from '../../veloAntwerpen';
import { useChildClicked } from '../../context/ChildClickedContext';
import { Paper, Typography } from '@mui/material';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';


const Map: React.FC = () => {

  const stations = useStations();
  const {setChildClicked}  = useChildClicked();


  const [coordinates, setCoordinates] = useState({
    lat: 51.22038601791998,
    lng: 4.414753759659805,
  });

  const [visibleStations, setVisibleStations] = useState<Station[]>([]);

  const handleMapChange = ({ center, bounds }: { center: { lat: number; lng: number }, bounds: { nw: { lat: number, lng: number }, se: { lat: number, lng: number } } }) => {
    setCoordinates({ lat: center.lat, lng: center.lng });

    const newVisibleStations = stations.filter(station =>
      station.latitude >= bounds.se.lat &&
      station.latitude <= bounds.nw.lat &&
      station.longitude >= bounds.nw.lng &&
      station.longitude <= bounds.se.lng
    );

    setVisibleStations(newVisibleStations);
    console.log('new visible stations   ' + JSON.stringify(newVisibleStations));
    console.log(visibleStations.length)
  };

  return (
    <MapContainerSyled>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={handleMapChange}
        onChildClick={setChildClicked}
      >
        {visibleStations.map(station => (
          <Marker
            key={station.id}
            lat={station.latitude}
            lng={station.longitude}
            text={station.name}
          >
            {/* <LocationOnOutlinedIcon color='primary' fontSize='large' /> */}
        <PaperStyled elevation={3}>
      
        <PedalBikeOutlinedIcon color='secondary' fontSize='small'/>
        <Typography gutterBottom variant='subtitle2' >{station.free_bikes}</Typography>
        </PaperStyled>
          </Marker>

        )
        )}

      </GoogleMapReact>
    </MapContainerSyled>
  );
};

export default Map


