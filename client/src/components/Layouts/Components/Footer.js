import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <footer className='footer container justify-content-center'>
      <div className='navbar-brand '>
      <img className='navbar-logo w-300 h-100' src='/media/autotrade_logo.png' alt='' />
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
