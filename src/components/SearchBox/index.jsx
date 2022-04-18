import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SearchBox({ onSearch, onOrder }) {
  const [order, setOrder] = useState('asc');

  const onChangeOrder = (value) => {
    setOrder(value);
    onOrder(value);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            size="small"
            autoComplete="off"
            id="owner-basic"
            label="Search..."
            variant="outlined"
            onChange={(e) => onSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Select
            size="small"
            fullWidth
            value={order}
            label="OrderBy"
            onChange={(e) => onChangeOrder(e.target.value)}
          >
            <MenuItem value="asc">Asc </MenuItem>
            <MenuItem value="desc">Desc </MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onOrder: PropTypes.func.isRequired,
};
