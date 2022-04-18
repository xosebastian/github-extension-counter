import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import useCountExtensions from '../hooks/useCountExtensions';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ListExtensions from '../components/ListExtensions';
import SearchBox from '../components/SearchBox';

function App() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [order, serOrder] = useState('');
  const [data, loading] = useCountExtensions(url, query, order);

  const handleClick = (value) => {
    setUrl(value);
  };

  const handleSearch = (value) => {
    setQuery(value);
  };

  const handleOrder = (value) => {
    serOrder(value);
  };

  return (
    <Container maxWidth="md">
      <Header />
      <Navbar onClick={handleClick} />
      <SearchBox onSearch={handleSearch} onOrder={handleOrder} />
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <ListExtensions data={data} />
      </>
    </Container>
  );
}

export default App;
