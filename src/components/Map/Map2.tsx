import { useStations } from '../../context/StationsContext';
import { Station } from '../../veloAntwerpen';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import { LockClockOutlined, PedalBikeOutlined } from '@mui/icons-material';
import { useSelectedStation } from '../../context/SelectedStationContext';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';


const Map2: React.FC = () => {

    const stations = useStations();
    const { selectedStation, setSelectedStation } = useSelectedStation();

    const [coordinates, setCoordinates] = useState({
        lat: 51.22038601791998,
        lng: 4.414753759659805,
    });



    const icon = L.icon({
        iconRetinaUrl: iconRetina,
        iconUrl: iconMarker,
        iconSize: [20, 35], // size of the icon
        iconAnchor: [20, 20], // point of the icon which will correspond to marker's location

    });

    const handleMapClick = (station: Station) => {
        setSelectedStation(station)
    }


    return (
        <MapContainer style={{ height: '80vh', width: '100%' }} center={coordinates} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {stations.map(station => (
                <Marker
                    key={station.id}
                    position={[station.latitude, station.longitude]}
                    icon={icon}
                    eventHandlers={{ click: () => handleMapClick(station) }}
                >
                    {selectedStation?.id === station.id && (
                        <Popup >
                            <div>
                                <h5>{station.name}</h5>
                                <Box display='flex' justifyContent='space-between'>
                                    <PedalBikeOutlined color='secondary' fontSize='small'/>
                                    <LockClockOutlined color='primary' fontSize='small'/>
                                </Box>
                                <Box display='flex' justifyContent='space-between'>
                                    <Typography gutterBottom variant='subtitle2'>{station.free_bikes}</Typography>
                                    <Typography gutterBottom variant='subtitle2'>{station.empty_slots}</Typography>
                                </Box>
                        </div>
                        </Popup>
            )}
        </Marker>
    ))
}
        </MapContainer >
    );

}

export default Map2