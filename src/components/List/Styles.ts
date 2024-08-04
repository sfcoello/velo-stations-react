
import { FormControl, Grid, styled } from "@mui/material";

// export default makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   loading: {
//     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
//   },
//   container: {
//     padding: '25px',
//   },
//   marginBottom: {
//     marginBottom: '30px',
//   },
//   list: {
//     height: '75vh', overflow: 'auto',
//   },
// }));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  }));

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
