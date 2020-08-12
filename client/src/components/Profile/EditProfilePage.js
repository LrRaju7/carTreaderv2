import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserByToken, updateUserProfile } from '../../actions/user';
import { updatePassword } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Spinner from '../Layouts/Components/Spinner';
import { Container, Button, Row, Col } from 'reactstrap';
import '../../styles/components/_dashboard.scss';

const EditProfilePage = ({
  getUserByToken,
  updatePassword,
  updateUserProfile,
  isAuthenticated,
  user: { data, loading }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    bio: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const {
    name,
    email,
    location,
    bio,
    currentPassword,
    newPassword,
    confirmNewPassword,
    avatar,
    date,
    role,
  } = formData;

  useEffect(() => {
    getUserByToken();
  }, [getUserByToken, isAuthenticated]);

  useEffect(() => {
    setFormData({
      name: loading || !data.name ? '' : data.name,
      email: loading || !data.email ? '' : data.email,
      password: loading || !data.password ? '' : data.password,
      location: loading || !data.location ? '' : data.location,
      bio: loading || !data.bio ? '' : data.bio,
      avatar: loading || !data.avatar ? '' : data.avatar,
      date: loading || !data.date ? '' : data.date,
      role: loading || !data.role ? '' : data.role,
      verified: loading || !data.verified.status ? '' : data.verified.status,
    });
  }, [loading, data]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleUpdateProfile = async e => {
    e.preventDefault();
    updateUserProfile(name, email, location, bio);
  };

  const handleUpdatePassword = async e => {
    e.preventDefault();
    updatePassword(currentPassword, newPassword, confirmNewPassword);
  };

  return loading || data === null ? (
    <Spinner />
  ) :(data.role === 'Buyer' || (data.role === 'Bidder' && data.verified.status === true) || (data.role === 'Auctioneer' && data.verified.status === true)) ? (
      <Fragment>
        <section className='section-home container-fluid' >
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="">
                    <div className="card-body">
                      <div className="e-profile">
                        <Row>
                          <Col lg={4} className='text-center'>
                            <span>
                              <img src="https://i.ytimg.com/vi/u1dVdYLMCK4/maxresdefault.jpg" className="rounded-circle image-size shadow" alt="avatar" />
                            </span>
                          </Col>
                          <Col lg={4} className='text-center'>
                            <span>
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{name}</h4>
                              <p className="mb-0">{email}</p>
                              <p className="text-muted"><small>Active</small></p>
                              <button className="btn btn-primary shadow" type="button">
                                <i className="fa fa-fw fa-camera"></i>
                                <span>Change Photo</span>
                              </button>
                            </span>
                          </Col>
                          <Col lg={4} className='text-center'>
                            <span>
                              <span className="badge badge-secondary">{role}</span>
                              <div className="text-muted"><small>{date}</small></div>
                              <div className="mt-5">
                                <Link to={`/dashboard`}>
                                  <button className="btn btn-outline-dark shadow" type="button">Back to Dashboard</button>
                                </Link>
                              </div>
                            </span>
                          </Col>
                        </Row>
                        <hr className="mt-3" />
                        <div className="tab-content pt-3">
                          <div className="tab-pane active">
                            <form style={{ width: '100%' }} className="form" novalidate="" onSubmit={e => handleUpdateProfile(e)}>
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Full Name</label>
                                        <input className="form-control" type="text" name="name" value={name} onChange={e => onChange(e)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" type="email" name="email" value={email} onChange={e => onChange(e)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col mb-3">
                                      <div className="form-group">
                                        <label>Bio</label>
                                        <textarea className="form-control" rows="5" placeholder="My Bio" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col d-flex justify-content-center">
                                      <button style={{ width: 'auto' }} className="btn btn-primary shadow" type="submit" value='Edit Profile'>Update Profile</button>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </form>
                            <form style={{ width: '100%' }} className='form mt-5' onSubmit={e => handleUpdatePassword(e)}>
                              <div className="row">
                                <div className="col-12 mb-3">
                                  <div className="mb-2"><b>Change Password</b></div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Current Password</label>
                                        <input className="form-control" type='password'
                                          placeholder='Current Password'
                                          name='currentPassword'
                                          value={currentPassword}
                                          onChange={e => onChange(e)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>New Password</label>
                                        <input className="form-control" type='password'
                                          placeholder='New password'
                                          name='newPassword'
                                          value={newPassword}
                                          onChange={e => onChange(e)} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Confirm <span className="d-none d-xl-inline">Password</span></label>
                                        <input className="form-control" type='password'
                                          placeholder='Confirm new Password'
                                          name='confirmNewPassword'
                                          value={confirmNewPassword}
                                          onChange={e => onChange(e)} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col d-flex justify-content-center">
                                  <button style={{ width: 'auto' }} className="btn btn-primary shadow" type="submit" value='Update Password'>Update Password</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
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

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getUserByToken,
  updatePassword,
  updateUserProfile
})(EditProfilePage);
