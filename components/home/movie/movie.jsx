import Link from 'next/link';
import moment from 'moment';
import styles from '../../../styles/Movie.module.scss';

const image = (props) => {
  return (
    <>
      <img
        src={props.movie.thumbnail}
        class='card-img-top'
        alt='...'
      />
      <div className={styles.time}>
        <span className='badge bg-dark'>{props.movie.length}</span>
      </div>
    </>
  );
};

const body = (props) => {
  const {movie} = props;
  return (
    <div class='card-body p-1'>
      <p class='card-title font-weight-bolder m-0 lh-sm'>
        {movie.title}
      </p>
      <p className='text-black-50 m-0'>
        <small>{movie.author}</small>
      </p>
      <p className='text-black-50 m-0 lh-1'>
        <small>{movie.views} views {!props.landscape ? ' - ' + moment(movie.publishedAt).fromNow() : ''}</small>
      </p>
      {props.landscape && (
        <p className='text-black-50 m-0 lh-1'>
        <small>{moment(movie.publishedAt).fromNow()}</small>
        </p>
      )}
    </div>
  );
};

export default function Movie(props) {
  return (
    <Link href={'/video/' + props.movie.id}>
      <div className={'card border-0 pointer ' + styles.card}>
        {props.landscape && (
          <div className="row">
            <div class='col-5'>
              {image(props)}
            </div>
            <div class='col-7'>
              {body(props)}
            </div>
          </div>
        )}
        {!props.landscape && (
          <>
          {image(props)}
          {body(props)}
          </>
        )}
        </div>
    </Link>
  );
}
