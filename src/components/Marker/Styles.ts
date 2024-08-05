import { styled } from "@mui/material";

export const MarkerContainer = styled('div')(({ theme }) => ({
    position: 'absolute', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1, '&:hover': { zIndex: 2 },
  }));