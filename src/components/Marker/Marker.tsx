// Marker.tsx
import React from 'react';
import styled from '@mui/material/styles/styled';

const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
}));

interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
  children?: React.ReactNode;
}

const Marker: React.FC<MarkerProps> = ({ lat, lng, children }) => {
    return (
        <MarkerContainer>
          {children}
          <div style={{ color: 'black', background: 'white', padding: '2px 5px', borderRadius: '3px', marginTop: '5px' }}>
          </div>
          </MarkerContainer>
      );
};

export default Marker;
