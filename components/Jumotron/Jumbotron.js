import React from "react";
import {useRouter} from 'next/router' ;

const Jumbotron = () => {
    const router=useRouter() ;
  return (
    <div className="container p-3 mb-4 bg-light rounded-3 mt-5  mb-5">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Cats World</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button" onClick={()=>router.push('/cats')}>
          Start looking
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;
