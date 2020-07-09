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
      <Container >
        <h1 className='large-heading'>Admin Dashboard</h1>
        <br/>
        <p className='small-text'>Welcome to your dashboard, user</p>
      </Container>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
