import {Paper, styled } from "@mui/material";


export const MapContainerSyled = styled('div')(({ theme }) => ({
    height: '75vh',
     width: '100%',
  }));

export const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, '&:hover': { zIndex: 2 },

  }));

  export const PaperStyled = styled(Paper)(({ theme }) => ({
    padding: '10px', display: 'flex', 
    justifyContent: 'center', 
    width: '50px', 
    alignItems: 'center', // Alinea verticalmente
    gap: '8px'
  }));

  export const ImgPointer = styled('img')(({ theme }) => ({
    cursor: 'pointer',
  }));


