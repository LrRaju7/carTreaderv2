import React, { Fragment } from 'react';
import SpinnerGif from './Loading_icon.gif';
import { Helmet } from 'react-helmet';

const Spinner = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Loading.. | Auction</title>
      </Helmet>
      <div className='spinner-container d-flex flex-row justify-content-center align-items-center' style={{height:'100%'}}>
        <img src={SpinnerGif} className='spinner-img' alt='Loading' />
      </div>
    </Fragment>
  );
};

export default Spinner;
