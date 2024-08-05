import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, } from '@mui/material';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { Station } from '../../veloAntwerpen';


// Define the type for the props for the Stations component
interface StationsProps {
  station: Station;
}

const StationsDetails: React.FC<StationsProps> = ({ station }) => {
  
  return (
    <Card elevation={4}>
      <CardMedia style={{ height: 100 }} />
      <CardContent>
        <Typography gutterBottom variant='h6'>{station.extra.address}</Typography>
        <Typography variant='subtitle1'>{station.name}</Typography>
        <Box display='flex' justifyContent='space-between'>
        <PedalBikeOutlinedIcon></PedalBikeOutlinedIcon>
          <LockClockOutlinedIcon></LockClockOutlinedIcon>
        </Box>
        <Box display='flex' justifyContent='space-between'>
        <Typography gutterBottom variant='subtitle1'>{station.free_bikes}</Typography>
          <Typography gutterBottom variant='subtitle1'>{station.empty_slots}</Typography>
        </Box>
      </CardContent>

    </Card>
  )
}

export default StationsDetails