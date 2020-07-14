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
													<img src="assets/img/user-medium.png" className="img-circle" alt="Avatar" />
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
											<Form method="post" className="" autocomplete="off" novalidate="">
												<div className="form-block">
													<h2>Your Info</h2>
													<fieldset className="form-group ">
														<label for="owner_is_dealer">Dealer or private party?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="dealer-yes" className="form-check-input" type="radio" name="owner_is_dealer" value="true" />
																<label className="form-check-label" for="dealer-yes">Dealer</label>
															</div>
															<div className="form-check">
																<input id="dealer-no" className="form-check-input" type="radio" name="owner_is_dealer" value="false" />
																<label className="form-check-label" for="dealer-no">Private party</label>
															</div>
														</div>
													</fieldset>
													<div className="d-flex">
														<fieldset className="form-group ">
															<label for="name">Your name</label>
															<input className="form-control" name="name" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" id="id-name" value={user.data.name} />
														</fieldset>
														<fieldset className="form-group">
															<label for="phone_number">Contact phone number</label>
															<input type="text" className="form-control" name="phone_number" id="id-phone_number" value="" />
														</fieldset>
													</div>
												</div>
												<div className="form-block">
													<h2>Car Details</h2>
													<div className="sale-elsewhere">
														<fieldset className="form-group ">
															<label for="listed_elsewhere">Is this car for sale elsewhere?</label>
															<div className="custom-radio-container">
																<div className="form-check">
																	<input id="listed-yes" className="form-check-input" type="radio" name="listed_elsewhere" value="true" />
																	<label className="form-check-label" for="listed-yes">Yes</label>
																</div>
																<div className="form-check">
																	<input id="listed-no" className="form-check-input" type="radio" name="listed_elsewhere" value="false" />
																	<label className="form-check-label" for="listed-no">No</label>
																</div>
															</div>
														</fieldset>
													</div>
													<fieldset className="form-group ">
														<label for="year">Year</label>
														<select className="form-control" name="year">
															<option value="-1" selected="">Choose year</option>
															<option value="2020">2020</option>
															<option value="2019">2019</option>
															<option value="2018">2018</option>
															<option value="2017">2017</option>
															<option value="2016">2016</option>
															<option value="2015">2015</option>
															<option value="2014">2014</option>
															<option value="2013">2013</option>
															<option value="2012">2012</option>
															<option value="2011">2011</option>
															<option value="2010">2010</option>
															<option value="2009">2009</option>
															<option value="2008">2008</option>
															<option value="2007">2007</option>
															<option value="2006">2006</option>
															<option value="2005">2005</option>
															<option value="2004">2004</option>
															<option value="2003">2003</option>
															<option value="2002">2002</option>
															<option value="2001">2001</option>
															<option value="2000">2000</option>
															<option value="1999">1999</option>
															<option value="1998">1998</option>
															<option value="1997">1997</option>
															<option value="1996">1996</option>
															<option value="1995">1995</option>
															<option value="1994">1994</option>
															<option value="1993">1993</option>
															<option value="1992">1992</option>
															<option value="1991">1991</option>
															<option value="1990">1990</option>
															<option value="1989">1989</option>
															<option value="1988">1988</option>
															<option value="1987">1987</option>
															<option value="1986">1986</option>
															<option value="1985">1985</option>
															<option value="1984">1984</option>
															<option value="1983">1983</option>
															<option value="1982">1982</option>
															<option value="1981">1981</option>
															<option value="1980">1980</option>
														</select>
													</fieldset>
													<div className="d-flex">
														<fieldset className="form-group ">
															<label for="make">Make</label>
															<input className="form-control" name="make" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" id="id-make" value="" />
														</fieldset>
														<fieldset className="form-group ">
															<label for="model">Model</label>
															<input className="form-control" name="model" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" id="id-model" value="" />
														</fieldset>
													</div>
													<div className="d-flex">
														<fieldset className="form-group ">
															<label for="vin">VIN</label>
															<input className="form-control" name="vin" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" id="id-vin" value="" />
														</fieldset>
														<fieldset className="form-group">
															<label for="mileage">Mileage</label>
															<input type="text" className="form-control" name="mileage" id="id-mileage" value="" />
														</fieldset>
													</div>
													<fieldset className="form-group ">
														<label for="country">Where is the car located?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="country-us" className="form-check-input" type="radio" name="country" value="US" />
																<label className="form-check-label" for="country-us">United States</label>
															</div>
															<div className="form-check">
																<input id="country-ca" className="form-check-input" type="radio" name="country" value="CA" />
																<label className="form-check-label" for="country-ca">Canada</label>
															</div>
														</div>
													</fieldset>
													<fieldset className="form-group textarea ">
														<label for="noteworthy">Noteworthy Options/Features</label>
														<textarea className="form-control  " name="noteworthy" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="true" id="id-noteworthy">
														</textarea>
													</fieldset>
													<fieldset className="form-group ">
														<label for="vehicle_stock">Has it been modified?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="stock-yes" className="form-check-input" type="radio" name="vehicle_stock" value="stock" />
																<label className="form-check-label" for="stock-yes">Completely stock</label>
															</div>
															<div className="form-check">
																<input id="stock-no" className="form-check-input" type="radio" name="vehicle_stock" value="modified" />
																<label className="form-check-label" for="stock-no">Modified</label>
															</div>
														</div>
													</fieldset>
												</div>
												<div className="form-block">
													<h2>Title Info</h2>
													<fieldset className="form-group ">
														<label for="title_country">Where is the car titled?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="title_country-us" className="form-check-input" type="radio" name="title_country" value="US" />
																<label className="form-check-label" for="title_country-us">United States</label>
															</div>
															<div className="form-check">
																<input id="title_country-ca" className="form-check-input" type="radio" name="title_country" value="CA" />
																<label className="form-check-label" for="title_country-ca">Canada</label>
															</div>
														</div>
													</fieldset>
													<fieldset className="form-group ">
														<label for="owner_has_title">Is the vehicle titled in your name?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="title-yes" className="form-check-input" type="radio" name="owner_has_title" value="true" />
																<label className="form-check-label" for="title-yes">Yes</label>
															</div>
															<div className="form-check">
																<input id="title-no" className="form-check-input" type="radio" name="owner_has_title" value="false" />
																<label className="form-check-label" for="title-no">No</label>
															</div>
														</div>
													</fieldset>
													<fieldset className="form-group ">
														<label for="lienholder">Is there a lienholder on the title?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="lien-yes" className="form-check-input" type="radio" name="lienholder" value="true" />
																<label className="form-check-label" for="lien-yes">Yes</label>
															</div>
															<div className="form-check">
																<input id="lien-no" className="form-check-input" type="radio" name="lienholder" value="false" />
																<label className="form-check-label" for="lien-no">No</label>
															</div>
														</div>
													</fieldset>
													<fieldset className="form-group ">
														<label for="title_status">What is the title’s status?</label>
														<select className="form-control" name="title_status">
															<option value="-1" selected="">Choose</option>
															<option value="clean">Clean</option>
															<option value="salvage">Salvage</option>
															<option value="rebuilt">Rebuilt</option>
															<option value="not actual mileage">Not actual mileage</option>
														</select>
													</fieldset>
												</div>
												<div className="form-block">
													<h2>Reserve Price</h2>
													<fieldset className="form-group ">
														<label for="has_reserve">Do you want to set a minimum price required for your vehicle to sell?</label>
														<div className="custom-radio-container">
															<div className="form-check">
																<input id="res-yes" className="form-check-input" type="radio" name="has_reserve" value="true" />
																<label className="form-check-label" for="res-yes">Yes</label>
															</div>
															<div className="form-check">
																<input id="res-no" className="form-check-input" type="radio" name="has_reserve" value="false" />
																<label className="form-check-label" for="res-no">No</label>
															</div>
														</div>
													</fieldset>
												</div>
												<div className="form-block photos">
													<h2>Photos</h2>
													<p>Please upload 8 to 16 photos of the exterior and interior of the car.</p>
													<p className="note">To learn more about taking great car photos, <a href="https://youtu.be/E6Nc-2d7kK4" rel="noopener noreferrer" title="Photo Guidelines" target="_blank">check out our photo guide</a>
													</p>
													<div className="uploader ready">
														<div className="upload-drop-site ">
															<div className="handler" tabindex="0">
																<input accept="image/png,image/jpeg,image/jpg" multiple type="file" autocomplete="off" tabindex="-1" styles="display: none;" />
																<svg className="dropzone-icon" width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M16.0054 13.998L12.0054 9.99805L8.00537 13.998" stroke="#4AD493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																	<path d="M12.0054 9.99805V18.998" stroke="#4AD493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																	<path d="M20.3954 16.3878C22.4018 15.2939 23.4113 12.979 22.8477 10.7645C22.284 8.54988 20.2906 6.99927 18.0054 6.99777H16.7454C15.9165 3.79158 13.1979 1.42754 9.90765 1.05187C6.61742 0.676191 3.43585 2.36655 1.90553 5.30336C0.375207 8.24017 0.812526 11.8163 3.00545 14.2978" stroke="#4AD493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																	<path d="M16.0054 13.998L12.0054 9.99805L8.00537 13.998" stroke="#4AD493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
																</svg>
																<p data-abbr="Tap to select photos">
																	<span>Click to select photos, or drag and drop here</span>
																</p>
															</div>
														</div>
													</div>
												</div>
												<div className="form-block">
													<h2>Referral</h2>
													<fieldset className="form-group ">
														<label for="referral">How did you hear about us? If a user referred you please leave their username.</label>
														<input className="form-control" name="referral" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" id="id-referral" value="" />
													</fieldset>
												</div>
												<button type="submit" className="btn btn-primary btn-block submit mt-5">Post Item</button>
											</Form>
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
