import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Popular(props) {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1>Popular</h1>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel id="demo-controlled-open-select-label">Sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="Sort by title asc"></MenuItem>
          <MenuItem value={10}>Sort by title asc</MenuItem>
          <MenuItem value={20}>Sort by title desc</MenuItem>
          <MenuItem value={30}>Sort by release date asc</MenuItem>
          <MenuItem value={40}>Sort by release date desc</MenuItem>
          <MenuItem value={50}>Most Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Popular;
