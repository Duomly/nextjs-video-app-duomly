import Movie from '../movie/movie';

export default function Category(props) {
  return (
    <div className='p-4 pt-5 pb-3'>
      <h6><svg
            width='1em'
            height='1em'
            viewBox='0 2 16 16'
            class='bi bi-house-door-fill text-danger mr-2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z' />
            <path
              fill-rule='evenodd'
              d='M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
            />
          </svg> {props.category}</h6>
      <div class='row'>
        {props.movies.map((movie)=><div className="col"><Movie movie={movie}/></div>)}

      </div>
    </div>
  );
}
