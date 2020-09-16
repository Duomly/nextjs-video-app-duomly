import { useEffect, useState } from 'react';
import Header from '../components/shared/header/header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    fetch('/mocks/movies.json')
      .then(response => response.json())
      .then(formatted=>setMovies(formatted));
  },[]);
  return (
    <>
      <Header />
      <Component data={movies} {...pageProps} />
    </>
  );
}

export default MyApp;
