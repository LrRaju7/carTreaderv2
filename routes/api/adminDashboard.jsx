import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

const Dashboard = props => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard | Auction</title>
      </Helmet>
      <Dashboard/>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
