import React, { useState } from 'react';
import {AppBar, Grid } from '@mui/material';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { StationsProvider } from './context/StationsContext';
import { SelectedStationProvider } from './context/SelectedStationContext';
import Map2 from './components/Map/Map2';

const App: React.FC = () => {


  return (
    <>
    <StationsProvider>
      <SelectedStationProvider>
      <Header />
      <Grid container spacing={3} style={{ width: '100%', marginTop: '20px' }} >
        <Grid item xs={12} md={3} style={{ display: 'flex', flexDirection: 'column' }}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', flexDirection: 'column' }}>
          <Map2 />
        </Grid>
      </Grid>
      </SelectedStationProvider>
      </StationsProvider>
    </>
  );
}


export default App;
