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
		) : (user.data.role === 'Buyer' || (user.data.role === 'Bidder' && user.data.verified.status === true)) ? (
			<Fragment>
				<section className='section-home container-fluid'>
					<div className="main p-3 mb-5 bg-white rounded">
						<div className="main-content mx-3">
							<div className="panel panel-profile">
								<div className="clearfix">
									{/* <div className="profile-left"> */}
									<div className="profile-header shadow">
										<div className="overlay"></div>
										<div className="profile-main">
											<img src="https://i.ytimg.com/vi/u1dVdYLMCK4/maxresdefault.jpg" className="rounded-circle image-size shadow" alt="100x100" />
											<h2 className="name mt-5">{user.data.name}</h2>
											<span className="online-status status-available">Available</span>
										</div>
										<div className="profile-stat">
											<div className="row">
												<div className="col-md-4 stat-item">
													{user.data.ratingsAverage} * <span>Rating</span>
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
												<li className="list-group-item"><strong>Role:</strong> <span>{user.data.role}</span></li>
												<li className="list-group-item"><strong>Mobile:</strong> <span>{user.data.phone}</span></li>
												<li className="list-group-item"><strong>Email:</strong> <span>{user.data.email}</span></li>
												<li className="list-group-item"><strong>Address:</strong> <span>{user.data.location}</span></li>
												<li className="list-group-item"><strong>Bio:</strong> <span>{user.data.bio}</span></li>
											</ul>
											<div className="mt-5 text-center">
												<Link to={`/dashboard`}>
													<button style={{ width: 'auto' }} className="btn btn-outline-dark shadow" type="button">Back to Dashboard</button>
												</Link>
											</div>
										</div>
									</div>
									{/* </div> */}
									{/* <div className="profile-right">
											<ListingForm />
											<CreateListing />
										</div> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		) : ((user.data.role === 'Auctioneer' && user.data.verified.status === true)) ? (
			<Fragment>
				<section className='section-home container-fluid'>
					<div className="main p-3 mb-5 bg-white rounded">
						<div className="main-content mx-3">
							<div className="panel panel-profile">
								<div className="clearfix">
									<div className="profile-left">
										<div className="card bg-light">
											<div className="card-header text-center">
												<div className="profile-main">
													<img src="https://i.ytimg.com/vi/u1dVdYLMCK4/maxresdefault.jpg" className="rounded-circle image-size shadow" alt="100x100" />
													<h3 className="name">{user.data.name}</h3>
													<span className="online-status status-available">Available</span>
												</div>
											</div>
											<div className="card-body">
												<div className="row text-center">
													<div className="col-md-4 stat-item">
														{user.data.ratingsAverage} * <span>Rating</span>
													</div>
													<div className="col-md-4 stat-item">
														* <span>Uploads</span>
													</div>
													<div className="col-md-4 stat-item">
														* <span>Sold</span>
													</div>
												</div>
											</div>
											<div className="table-responsive text-white">
												<table className="table table-striped table-vcenter mb-0">
													<tbody>
														<tr>
															<td>
																<div className="clearfix">
																	<div className="float-left"><strong >Role:</strong></div>
																	<div className="float-right">{user.data.role}</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="clearfix">
																	<div className="float-left"><strong >Mobile:</strong></div>
																	<div className="float-right">{user.data.phone}</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="clearfix">
																	<div className="float-left"><strong >Email:</strong></div>
																	<div className="float-right">{user.data.email}</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="clearfix">
																	<div className="float-left"><strong >Address:</strong></div>
																	<div className="float-right">{user.data.location}</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="clearfix">
																	<div className="float-left"><strong >Bio:</strong></div>
																	<div className="float-right">{user.data.bio}</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<div className="mt-5 text-center">
													<Link to={`/dashboard`}>
														<button style={{ width: '50%' }} className="btn btn-outline-dark shadow mb-5" type="button">Back to Dashboard</button>
													</Link>
												</div>
											</div>
										</div>
									</div>
									<div className="profile-right">
										{/* <ListingForm /> */}
										{/* <CreateListing /> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Fragment>
		)
					: (
						<Fragment>
							<section className='section-home container-fluid' >
								<div className='align-items-center justify-content-center' style={{ marginTop: '15%' }}>
									<p className="h1 text-center text-muted">
										Hello <strong>{user.data.name}</strong>
									</p>
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