import {useRouter} from 'next/router';
import Movie from '../../components/home/movie/movie';
import Description from '../../components/video/description/description';
import Meta from '../../components/video/meta/meta';
import NextVideos from '../../components/video/nextVideos/nextVideos';
import Player from '../../components/video/player/player';

export default function VideoPage(props) {
  const router = useRouter();
  const id = router.query.id;
  const movie = props.data.find(item => String(item.id) === String(id));
  if (props.data && props.data.length && !movie) {
    console.log(router);
    router.push('/');
  } 
  if(movie) {
    return (
      <div class='row'>
        <div className='col-8 p-4 menu-padding'>
          <Player movie={movie}/>
          <Meta movie={movie}/>
          <Description movie={movie}/>
        </div>
        <div className='col-4 vh-100 overflow-auto menu-padding'>
          Next movies
          <NextVideos movies={props.data}/>
        </div>
      </div>
    )
  } else {
    return (<p>Loading</p>)
  }
  
}