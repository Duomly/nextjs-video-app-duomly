import Movie from "../../home/movie/movie";

export default function NextVideos(props) {
  return (
    <div>
      {props.movies.map(movie=><div class="mt-3"><Movie movie={movie} landscape={true}/></div>)}
    </div>
  );
}
