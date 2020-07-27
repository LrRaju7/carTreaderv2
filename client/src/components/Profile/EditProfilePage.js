import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserByToken, updateUserProfile } from '../../actions/user';
import { updatePassword } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Spinner from '../Layouts/Components/Spinner';
import { Container, Button } from 'reactstrap';

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
  ) : (
      <Fragment>
        <section className='section-home container-fluid' >
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" styles="width: 140px;">
                              <div className="d-flex justify-content-center align-items-center rounded ml-3" styles="height: 140px; background-color: rgb(233, 236, 239);">
                                <span styles="color: rgb(166, 168, 170); font: bold 8pt Arial;"><img src="//placehold.it/140" class="mx-auto img-fluid rounded img-circle d-block" alt="avatar" /></span>
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3 ml-5">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{name}</h4>
                              <p className="mb-0">{email}</p>
                              <div className="text-muted"><small>Active</small></div>
                              <div className="mt-2">
                                <button className="btn btn-primary" type="button">
                                  <i className="fa fa-fw fa-camera"></i>
                                  <span>Change Photo</span>
                                </button>
                              </div>
                            </div>
                            <div className="text-center text-sm-right">
                              <span className="badge badge-secondary">{role}</span>
                              <div className="text-muted"><small>{date}</small></div>
                              <div className="mt-5">
                                <Link to={`/dashboard`}>
                                  <button className="btn btn-outline-dark" type="button">Back to Dashboard</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item"><a href="" className="active nav-link">Settings</a></li>
                        </ul>
                        <div className="tab-content pt-3">
                          <div className="tab-pane active">
                            <form className="form" novalidate="" onSubmit={e => handleUpdateProfile(e)}>
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
                                      <button className="btn btn-primary btn-block" type="submit" value='Edit Profile'>Update Profile</button>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </form>
                            <form className='form mt-5' onSubmit={e => handleUpdatePassword(e)}>
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
                                  <button className="btn btn-primary btn-block" type="submit" value='Update Password'>Update Password</button>
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
