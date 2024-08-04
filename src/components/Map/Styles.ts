import { styled } from "@mui/material";
// export default makeStyles(() => ({
//   paper: {
//     padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',

//   },
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
    height: '85vh',
     width: '100%',
  }));

export const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, '&:hover': { zIndex: 2 },
  }));


