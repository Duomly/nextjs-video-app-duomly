import { useEffect, useState } from 'react';
import Category from '../category/category';

export default function Movies(props) {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(()=>{
    console.log(props.query);
    if(props.query && props.query.length) {
      const filterred = props.movies.filter((movie)=>movie.title.toLowerCase().includes(props.query.toLowerCase()));
      console.log(filterred);
      setMovies(filterred);
    } else {
      setMovies(props.movies);
    }
  },[props.query]);

  useEffect(()=>{
    console.log(movies);
    if (movies && movies.length) {
      const categoriesArray = [];
      movies.forEach((item) => {
        if (!categoriesArray.includes(item.category)) {
          categoriesArray.push(item.category);
        }
      });
      setCategories(categoriesArray);
      console.log(categoriesArray);
    }
  },[movies])

  return (
    <div className='pt-5 vh-100 overflow-auto'>
      {categories.map((category)=><Category category={category} movies={movies.filter((item)=>item.category===category)}/>)}
    </div>
  );
}
