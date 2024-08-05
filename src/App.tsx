import React, { useState } from 'react';
import {Grid } from '@mui/material';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { StationsProvider } from './context/StationsContext';
import { ChildClickedProvider } from './context/ChildClickedContext';

const App: React.FC = () => {

  const [childClicked, setChildClicked] = useState(null);


  return (
    <>
    <StationsProvider>
      <ChildClickedProvider>
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }} >
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
      </ChildClickedProvider>
      </StationsProvider>
    </>
  );
}


export default App;
