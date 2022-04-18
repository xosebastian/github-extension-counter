import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { getUrl } from '../../utils';

export default function Navbar({ onClick }) {
  const [owner, setOwner] = useState('');
  const [repository, setRepository] = useState('');

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            inputProps={{ 'data-testid': 'owner' }}
            size="small"
            autoComplete="off"
            label="Owner"
            variant="outlined"
            onChange={(e) => setOwner(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            size="small"
            autoComplete="off"
            fullWidth
            inputProps={{ 'data-testid': 'repository' }}
            label="Respository"
            variant="outlined"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            fullWidth
            size="small"
            data-testid="button"
            onClick={() => onClick(getUrl(owner, repository))}
            variant="contained"
            disabled={!owner || !repository}
            style={{ lineHeight: 2.5 }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
