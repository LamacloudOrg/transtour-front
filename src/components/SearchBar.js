import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const travels = [
    {
    "name":"Juan Ramirez",
    "fecha":"2020-03-20"
    },
    {
    "name":"Pedro Sanche",
    "fecha":"2020-03-20"
    }
]
const SearchBar = () => {
  return ( 

    <div style= {{ width: "100%"}}>
        <Autocomplete
      id="combo-box-demo"
      options={travels}
      getOptionLabel={(option) => option.name}
      style={{ width: 300}}
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
    </div>

   
  );
}

export default SearchBar;