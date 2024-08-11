import { alpha, colors, createTheme, styled, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Toolbar from "@mui/material/Toolbar";


export const TitleVelo = styled(Typography)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
  }));

export const ToolBarVelo = styled(Toolbar)(({ theme }) => ({
    display: 'flex', 
    justifyContent: 'space-between',
  }));

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  

  //TODO THEME PROVIDER
  export const theme = createTheme({
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    },
    palette: {
      primary: {
        main: '#b71c1c', 
      },
    },
  });
