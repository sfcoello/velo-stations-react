import React from 'react'
import { Container, ListStyled } from './Styles'
import { Grid, Typography } from '@mui/material'
import StationsDetails from '../Stations/StationsDetails'
import { useStations } from '../../context/StationsContext'


const List : React.FC = () => {
  const stations = useStations();

  return (
    <Container>
    <Typography variant="h5">Stations</Typography>
    <ListStyled>
      {stations?.map((station, i) => (
        <Grid item key={i} xs={12}>
          <StationsDetails station={station} />
        </Grid>
      ))}
    </ListStyled>
  </Container>
  );
}

export default List