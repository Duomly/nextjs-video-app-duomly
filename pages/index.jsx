import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Movies from '../components/home/movies/movies';
import Sidebar from '../components/home/sidebar/sidebar';

export default function Home(props) {
  const router = useRouter();
  const [query, setQuery] = useState(null);
  useEffect(()=>{
    console.log(router);
    setQuery(router.query.search);
  },[router.query])
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div class='row'>
        <div class='col-3'>
          <Sidebar />
        </div>
        <div class='col-9'>
          <Movies query={query} movies={props.data}/>
        </div>
      </div>
    </div>
  );
}
