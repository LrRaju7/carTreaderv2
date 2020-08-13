import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SearchItemNotFound = props => {
  return (
    <div>
      <Helmet>
        <title>Search Item not found! | Auction</title>
      </Helmet>
      <div className='row'>
        <h2 className='large-heading'>Opps! Item Not Found</h2>
        <p className='small-text'>
          Sorry, but the item you are looking for was not found. Please make
          sure you have typed the current search item correctly.
        </p>
      </div>
    </div>
  );
};

SearchItemNotFound.propTypes = {};

export default SearchItemNotFound;
