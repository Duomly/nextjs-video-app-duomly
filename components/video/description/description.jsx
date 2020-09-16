import { useState } from "react";

export default function Description(props) {
  const {movie} = props;
  const [subscriptions, setSubscriptions] = useState(movie.subscriptions);
  const [subscribed, subscribe] = useState(false);
  return (
    <div className=''>
      <div className="row">
        <div className="col-1">
          <img src={movie.authorLogo} alt="" className="img-fluid rounded-circle"/>
        </div>
        <div className="col-6">
          <p className="m-0 font-weight-bolder">{movie.author}</p>
          <p className='text-black-50 m-0 lh-1'>
  <small>{subscriptions} Subscriptions</small>
        </p>
        </div>
        <div className="col-5 text-right"><button onClick={() => {
                if (!subscribed) {
                  setSubscriptions(subscriptions + 1);
                }
                subscribe(true);
              }} className="btn-danger p-2">Subscribe</button></div>
      </div>
      <div className="mt-4" dangerouslySetInnerHTML={{__html: movie.description}}>
      </div>
    </div>
  );
}
