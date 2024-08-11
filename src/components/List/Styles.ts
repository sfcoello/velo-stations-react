
import { Grid, styled } from "@mui/material";


  export const SelectEmpty = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  export const Container = styled('div')(({ theme }) => ({
    padding: '25px',
  }));

  export const marginBottom = styled('div')(({ theme }) => ({
    marginBottom: '30px',
  }));

  export const ListStyled = styled(Grid)(({ theme }) => ({
    height: '75vh', overflow: 'auto',
  }));
