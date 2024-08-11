import React, { useMemo } from 'react'
import { Container, ListStyled } from './Styles'
import { Grid, Typography } from '@mui/material'
import StationsDetails from '../Stations/StationsDetails'
import { useStations } from '../../context/StationsContext'
import { useSelectedStation } from '../../context/SelectedStationContext'


const List : React.FC = () => {
  const stations = useStations();
  const { selectedStation } = useSelectedStation();

  const orderedStations = useMemo(() => {
    if (!selectedStation) return stations;

  
    return [
      selectedStation,
      ...stations.filter(station => station.id !== selectedStation.id),
    ];
  }, [stations, selectedStation]);


  return (
    <Container>
    <ListStyled>
      {orderedStations?.map((station, i) => (
        <Grid item key={i} xs={12}>
            <StationsDetails station={station} isSelected={selectedStation?.id === station.id}/>
            </Grid>
      ))}
    </ListStyled>
  </Container>
  );
}

export default List