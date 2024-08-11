import React from 'react'
import { useSelectedStation } from '../../context/SelectedStationContext'
import { useStations } from '../../context/StationsContext';
import { Search, SearchIconWrapper, StyledInputBase } from './Styles'
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, TextField } from '@mui/material';


const SearchBox = () => {
    const stations = useStations();
    const { selectedStation, setSelectedStation } = useSelectedStation(); 
    
    
    return (
       // <Autocomplete>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            {/* <Autocomplete
            id='search'
            options={stations.map((station) => station.extra.address)}
            > */}
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                autoComplete='on'
                onChange={(e) => {
                    console.log(e.target.value)
                    const station = stations.find(station => station.extra.address === e.target.value)
                    if (station) {
                        console.log(station)
                        setSelectedStation(station)
                    }
                }}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault() } }}
            />
        </Search >
       // </Autocomplete>
    )
}

export default SearchBox