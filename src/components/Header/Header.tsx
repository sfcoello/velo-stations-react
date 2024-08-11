import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {AppBar, Typography, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase, ToolBarVelo, TitleVelo} from './Styles'
import SearchBox from './SearchBox';



const Header = () => {

  return (
    
    <AppBar position='static' sx={{ backgroundColor: '#b71c1c' }}>
      <ToolBarVelo>
        <Typography variant='h5'>
        Find a bike
        </Typography>
        <Box display='felx'>
          <SearchBox/>
        </Box>
      </ToolBarVelo>
    </AppBar>
  )
}

export default Header