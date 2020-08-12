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
      verified: loading || !data.verified.status ? '' : data.verified.status,
    });
    
  }, [loading, data]);

  return loading || data === null ? (
    <Spinner />
  ) : (data.role === 'Buyer' || (data.role === 'Bidder' && data.verified.status === true)) ? (
    <BidsPage />
  ) : ((data.role === 'Auctioneer' && data.verified.status === true)) ? (
        <AuctionsPage />
      ) : (
        <Fragment>
						<section className='section-home container-fluid' >
							<div className='align-items-center justify-content-center' style={{marginTop:'20%'}}>
							<p className='h1 text-center text-muted'>
							your account is not verified yet. please be patient. After the verification is completed, you will be able to access your account.
							</p>
							<p className='h1 text-center text-muted'>
							Verification process can take upto 72 hours.
							</p>
							<p className='h1 text-center'>
								Thank you!!! <span><i className='fa fa-smile'></i></span>
							</p>
							</div>
						</section>
					</Fragment>
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