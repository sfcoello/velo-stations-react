import React from 'react';
import {Grid } from '@mui/material';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { StationsProvider } from './context/StationsContext';

const App: React.FC = () => {

  return (
    <>
    <StationsProvider>
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map/>
        </Grid>
      </Grid>
      </StationsProvider>
    </>
  );
}


export default App;
