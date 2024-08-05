import { CssBaselineProps, Paper, styled } from "@mui/material";
import { CSSProperties } from "react";
// export default makeStyles(() => ({
//   pointer: {
//     cursor: 'pointer',
//   },
//   mapcontainer: {
//     height: '85vh',
//     width: '100%',  
//   },
//   markerContariner: {
//     position: 'absolute', 
//     transform: 'translate(-50%, -50%)', 
//     zIndex: 1, '&:hover': { zIndex: 2 },
//   }
// }));

export const MapContainerSyled = styled('div')(({ theme }) => ({
    height: '80vh',
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


