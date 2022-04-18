import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function ListExtensions({ data }) {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={0}>
        {data.map(({ name, count }) => (
          <Grid item md={4} key={name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {name.toUpperCase().charAt(0, 1)}
                  {' '}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`Extension: ${name.toUpperCase()}`}
                secondary={`Quantity: ${count}`}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ListExtensions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      }.isRequired,
    ).isRequired,
  ).isRequired,
};

export default ListExtensions;
