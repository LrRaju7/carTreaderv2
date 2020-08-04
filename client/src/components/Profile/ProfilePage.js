import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserById, clearUser } from '../../actions/user';
import { connect } from 'react-redux';
import { getListings, clearListings } from '../../actions/listing';
import { clearReviews, getReviewsWrittenForUser } from '../../actions/review';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Moment from 'react-moment';
import CreateReportModal from '../Report/CreateReportModal';
import ViewReviewsModal from './ViewReviewsModal';
import CreateReviewModal from '../Reviews/CreateReviewModal';
import ListingCard from '../Listing/ListingCard';
import Spinner from '../Layouts/Components/Spinner';
import '../../styles/components/_dashboard.scss';
import ListingForm from '../Forms/ListingForm';
import CreateListing from '../Listing/CreateListingPage';

const ProfilePage = ({
	match,
	getUserById,
	user,
	clearUser,
	getListings,
	clearListings,
	getReviewsWrittenForUser,
	auth,
	clearReviews,
	listings
}) => {
	useEffect(() => {
		getReviewsWrittenForUser(match.params.id);
		getListings(`?createdBy=${match.params.id}&limit=5`);
		getUserById(match.params.id);
		return () => {
			clearUser();
			clearReviews();
			clearListings();
		};
	}, [
		getListings,
		getUserById,
		clearUser,
		clearListings,
		match.params.id,
		clearReviews
	]);

	return (user.loading ||
		user.data === null ||
		auth.loading ||
		auth.user === null ||
		listings.loading ||
		listings.data === null) &&
		!user.errors ? (
			<Spinner />
		) : user.errors ? (
			<div>No user found</div>
		) : (
				<Fragment>
					<section className='section-home container-fluid'>
						<div className="main shadow p-3 mb-5 bg-white rounded">
							<div className="main-content mx-3">
								<div className="panel panel-profile">
									<div className="clearfix">
										<div className="profile-left">
											<div className="profile-header shadow">
												<div className="overlay"></div>
												<div className="profile-main">
													<img src={user.data.avatar} className="img-circle" alt="Avatar" height='140' width='140' />
													<h3 className="name">{user.data.name}</h3>
													<span className="online-status status-available">Available</span>
												</div>
												<div className="profile-stat">
													<div className="row">
														<div className="col-md-4 stat-item">
															{user.data.ratingsAverage} <span>Rating</span>
														</div>
														<div className="col-md-4 stat-item">
															* <span>Uploads</span>
														</div>
														<div className="col-md-4 stat-item">
															* <span>Sold</span>
														</div>
													</div>
												</div>
											</div>
											<div className="profile-detail">
												<div className="profile-info">
													<h4 className="heading">Basic Info</h4>
													<ul className="list-unstylesd list-justify">
														<li className="list-group-item">Role <span>{user.data.role}</span></li>
														<li className="list-group-item">Mobile <span>+880{user.data.phone}</span></li>
														<li className="list-group-item">Email <span>{user.data.email}</span></li>
														<li className="list-group-item">Address <span>{user.data.address}, {user.data.city}, {user.data.state}-{user.data.zip}</span></li>
													</ul>
													<div className="card">
														<h5 className="card-header">Bio</h5>
														<div className="card-body">
															<h5 className="card-title">About Me</h5>
															<p className="card-text">{user.data.bio}</p>
														</div>
													</div>
													<div className="mt-5 text-center">
														<Link to={`/dashboard`}>
															<button style={{ width: '50%' }} className="btn btn-outline-dark shadow" type="button">Back to Dashboard</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
										<div className="profile-right">
											{/* <ListingForm /> */}
											<CreateListing />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Fragment>
			);
};


ProfilePage.propTypes = {};

const mapStateToProps = state => ({
	user: state.user,
	listings: state.listings,
	reviews: state.reviews,
	auth: state.auth
});

export default connect(mapStateToProps, {
	getUserById,
	clearUser,
	getListings,
	clearListings,
	clearReviews,
	getReviewsWrittenForUser
})(ProfilePage);
