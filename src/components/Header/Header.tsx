import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {AppBar, Typography, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase, ToolBarVelo} from './Styles'



const Header = () => {
  return (
    <AppBar position='static'>
      <ToolBarVelo>
        <Typography variant='h5'>
        Find a bike
        </Typography>
        <Box display='felx'>
          {/* <Typography variant='h6' className={classes.title}>
            Explore new stations
          </Typography> */}
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </ToolBarVelo>
    </AppBar>
  )
}

export default Header