import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserByToken} from '../../actions/user';
import { Link } from 'react-router-dom';
import Spinner from '../Layouts/Components/Spinner';
import AuctionsPage from './Common/AuctionsPage'
import BidsPage from './Common/BidsPage'
import '../../styles/components/_dashboard.scss';

const DashboardTab = ({
  getUserByToken,
  isAuthenticated,
  user: { data, loading }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
  });

  useEffect(() => {
    getUserByToken();
  }, [getUserByToken, isAuthenticated]);

  useEffect(() => {
    setFormData({
      name: loading || !data.name ? '' : data.name,
      email: loading || !data.email ? '' : data.email,
      location: loading || !data.location ? '' : data.location,
      avatar: loading || !data.avatar ? '' : data.avatar,
      role: loading || !data.role ? '' : data.role,
    });
  }, [loading, data]);

  return loading || data === null ? (
    <Spinner />
  ) : (data.role === 'Buyer' || data.role === 'Bidder') ? (
    <BidsPage />
  ) : (
        <AuctionsPage />
      );
};


DashboardTab.propTypes = {};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getUserByToken,
})(DashboardTab);