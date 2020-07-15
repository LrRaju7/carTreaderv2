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
						<div className="main">
							<div className="main-content">
								<div className="panel panel-profile">
									<div className="clearfix">
										<div className="profile-left">
											<div className="profile-header">
												<div className="overlay"></div>
												<div className="profile-main">
													<img src="https://i.ya-webdesign.com/images/profile-avatar-png-4.png" className="img-circle" alt="Avatar" height='140' width='140'/>
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
														<li className="list-group-item">Birthdate <span>*birthday</span></li>
														<li className="list-group-item">Mobile <span>*mobile</span></li>
														<li className="list-group-item">Email <span>{user.data.email}</span></li>
														<li className="list-group-item">Website <span><a href="">*website</a></span></li>
													</ul>
												</div>
												<div className="profile-info">
													<h4 className="heading">Social</h4>
													<ul className="list-inline social-icons">
														<li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
														<li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
														<li><a href="#" className="google-plus-bg"><i className="fa fa-google-plus"></i></a></li>
														<li><a href="#" className="github-bg"><i className="fa fa-github"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="profile-right">
											<h4 className="heading">{user.data.name}'s Awards</h4>
											<div className="awards">
												<div className="row">
													<div className="col-md-3 col-sm-6">
														<div className="award-item">
															<div className="hexagon">
																<span className="lnr lnr-sun award-icon"></span>
															</div>
															<span>Most Bright Idea</span>
														</div>
													</div>
													<div className="col-md-3 col-sm-6">
														<div className="award-item">
															<div className="hexagon">
																<span className="lnr lnr-clock award-icon"></span>
															</div>
															<span>Most On-Time</span>
														</div>
													</div>
													<div className="col-md-3 col-sm-6">
														<div className="award-item">
															<div className="hexagon">
																<span className="lnr lnr-magic-wand award-icon"></span>
															</div>
															<span>Problem Solver</span>
														</div>
													</div>
													<div className="col-md-3 col-sm-6">
														<div className="award-item">
															<div className="hexagon">
																<span className="lnr lnr-heart award-icon"></span>
															</div>
															<span>Most Loved</span>
														</div>
													</div>
												</div>
												<div className="text-center"><a href="#" className="btn btn-default">See all awards</a></div>
											</div>
											<ListingForm/>
											
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
