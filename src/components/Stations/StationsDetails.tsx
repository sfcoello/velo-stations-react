import React from 'react'
import { Box, Typography, Card, IconButton, CardContent, CardActions, } from '@mui/material';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { Station } from '../../veloAntwerpen';
import { FavoriteOutlined, ShareOutlined } from '@mui/icons-material';
import { useSelectedStation } from '../../context/SelectedStationContext';


// Define the type for the props for the Stations component
interface StationsProps {
  station: Station;
  isSelected?: boolean;

}


const StationsDetails: React.FC<StationsProps> = ({ station , isSelected}) => {

  const { selectedStation, setSelectedStation } = useSelectedStation();

const handleFavClick = (station: Station) => {
  setSelectedStation(station)
}
  
  return (
    console.log('station', station),
    <Card elevation={4} style={{ backgroundColor: isSelected ? '#f0f0f0' : '#fff' }} >
    <CardContent>
      <Typography gutterBottom variant='subtitle2'>{station.extra.address}</Typography>
      <Typography variant='subtitle1'>{station.name}</Typography>
      <Box display='flex' justifyContent='space-between' marginTop={3}>
        <PedalBikeOutlinedIcon />
        <LockClockOutlinedIcon />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography gutterBottom variant='subtitle1'>{station.free_bikes}</Typography>
        <Typography gutterBottom variant='subtitle1'>{station.empty_slots}</Typography>
      </Box>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteOutlined/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareOutlined />
        </IconButton>
      </CardActions>
  </Card>
  )
}

export default StationsDetails