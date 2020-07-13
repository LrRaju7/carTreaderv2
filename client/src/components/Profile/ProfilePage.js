import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserById, clearUser } from '../../actions/user';
import { connect } from 'react-redux';
import { getListings, clearListings } from '../../actions/listing';
import { clearReviews, getReviewsWrittenForUser } from '../../actions/review';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Moment from 'react-moment';
import CreateReportModal from '../Report/CreateReportModal';
import ViewReviewsModal from './ViewReviewsModal';
import CreateReviewModal from '../Reviews/CreateReviewModal';
import ListingCard from '../Listing/ListingCard';
import Spinner from '../Layouts/Components/Spinner';
import '../../styles/components/_dashboard.scss';

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
      <Container>
		<div className="main">
			<div className="main-content">
					<div className="panel panel-profile">
						<div className="clearfix">
							<div className="profile-left">
								<div className="profile-header">
									<div className="overlay"></div>
									<div className="profile-main">
										<img src="assets/img/user-medium.png" className="img-circle" alt="Avatar"/>
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
								<h4 className="heading">{user.data.name} Awards</h4>
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
								<div className="tab-content">
									<div className="tab-pane fade in active" id="tab-bottom-left1">
										<ul className="list-unstylesd activity-timeline">
											<li>
												<i className="fa fa-comment activity-icon"></i>
												<p>Commented on post <a href="#">Prototyping</a> <span className="timestamp">2 minutes ago</span></p>
											</li>
											<li>
												<i className="fa fa-cloud-upload activity-icon"></i>
												<p>Uploaded new file <a href="#">Proposal.docx</a> to project <a href="#">New Year Campaign</a> <span className="timestamp">7 hours ago</span></p>
											</li>
											<li>
												<i className="fa fa-plus activity-icon"></i>
												<p>Added <a href="#">Martin</a> and <a href="#">3 others colleagues</a> to project repository <span className="timestamp">Yesterday</span></p>
											</li>
											<li>
												<i className="fa fa-check activity-icon"></i>
												<p>Finished 80% of all <a href="#">assigned tasks</a> <span className="timestamp">1 day ago</span></p>
											</li>
										</ul>
										<div className="margin-top-30 text-center"><a href="#" className="btn btn-default">See all activity</a></div>
									</div>
									<div className="tab-pane fade" id="tab-bottom-left2">
										<div className="table-responsive">
											<table className="table project-table">
												<thead>
													<tr>
														<th>Title</th>
														<th>Progress</th>
														<th>Leader</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td><a href="#">Spot Media</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" styles="width: 60%;">
																	<span>60% Complete</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user2.png" alt="Avatar" className="avatar img-circle"/> <a href="#">Michael</a></td>
														<td><span className="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">E-Commerce Site</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar" role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" styles="width: 33%;">
																	<span>33% Complete</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user1.png" alt="Avatar" className="avatar img-circle"/> <a href="#">Antonius</a></td>
														<td><span className="label label-warning">PENDING</span></td>
													</tr>
													<tr>
														<td><a href="#">Project 123GO</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" styles="width: 68%;">
																	<span>68% Complete</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user1.png" alt="Avatar" className="avatar img-circle"/> <a href="#">Antonius</a></td>
														<td><span className="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">Wordpress Theme</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" styles="width: 75%;">
																	<span>75%</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user2.png" alt="Avatar" className="avatar img-circle"/> <a href="#">Michael</a></td>
														<td><span className="label label-success">ACTIVE</span></td>
													</tr>
													<tr>
														<td><a href="#">Project 123GO</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" styles="width: 100%;">
																	<span>100%</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user1.png" alt="Avatar" className="avatar img-circle" /> <a href="#">Antonius</a></td>
														<td><span className="label label-default">CLOSED</span></td>
													</tr>
													<tr>
														<td><a href="#">Redesign Landing Page</a></td>
														<td>
															<div className="progress">
																<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" styles="width: 100%;">
																	<span>100%</span>
																</div>
															</div>
														</td>
														<td><img src="assets/img/user5.png" alt="Avatar" className="avatar img-circle" /> <a href="#">Jason</a></td>
														<td><span className="label label-default">CLOSED</span></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      </Container>
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
