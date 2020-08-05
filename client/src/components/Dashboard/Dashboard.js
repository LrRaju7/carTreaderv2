import React, { Fragment, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/components/_dashboard.scss';

const DashboardTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <Fragment>
      <section className='section-home container-fluid'>
        <div className='shadow p-3 mb-5 bg-white rounded'>
          <div className="section-body mt-3 mb-5">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="mb-4">
                    <Row>
                      <Col lg={4} className='text-center'>
                        <span>
                          <img src="https://lh3.googleusercontent.com/proxy/6CYXFGlZwSJYzZnV5g87UWHfo55NUe7shy1BLeC9LOzJ7T97S63xj8cjSumUiiKeD8ht44MgeVJNqTAdHbm4uITIRMJSDNJu4MVCbZo8dLRqUJ4PKmratLlRyseE3NJMPnZIzsA6lyjQm-RwwEe5kaoU0e7SqF4jsrFD8mls" className="rounded-circle image-size shadow" alt="100x100" />
                        </span>
                      </Col>
                      <Col lg={8} className='text-center'>
                        <span>
                          <div className='mt-3'>
                            <p className='display-4'>Welcome *name</p>
                          </div>
                        </span>
                        <p className='blockquote'>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Active Cases</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">31</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Pending Tasks</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">245</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Upcoming Events</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">17</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">New Message</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">12</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Open Requests</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">19</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Hours Spent</h3>
                    </div>
                    <div className="card-body">
                      <h5 className="number mb-0 font-32 counter">284</h5>
                      <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix row-deck mt-3">
                <div className="col-xl-8 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Current Ticket Status</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-sm-flex justify-content-between">
                        <div className="font-12">as of 10th to 17th of Jun 2019</div>
                        <div className="selectgroup w250">
                          <label className="selectgroup-item">
                            <input type="radio" name="intensity" value="Day" className="selectgroup-input" checked="" />
                            <span className="selectgroup-button">1D</span>
                          </label>
                          <label className="selectgroup-item">
                            <input type="radio" name="intensity" value="Week" className="selectgroup-input" />
                            <span className="selectgroup-button">1W</span>
                          </label>
                          <label className="selectgroup-item">
                            <input type="radio" name="intensity" value="Month" className="selectgroup-input" />
                            <span className="selectgroup-button">1M</span>
                          </label>
                          <label className="selectgroup-item">
                            <input type="radio" name="intensity" value="Year" className="selectgroup-input" />
                            <span className="selectgroup-button">1Y</span>
                          </label>
                        </div>
                      </div>
                      <div id="chart-combination" styles="height: 205px"></div>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-6 col-xl-3 col-md-6">
                          <h5>05</h5>
                          <div className="clearfix">
                            <div className="float-left"><strong>35%</strong></div>
                            <div className="float-right"><small className="text-muted">Yesterday</small></div>
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-gray" role="progressbar" styles="width: 35%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span className="text-uppercase font-10">New Tickets</span>
                        </div>
                        <div className="col-6 col-xl-3 col-md-6">
                          <h5>18</h5>
                          <div className="clearfix">
                            <div className="float-left"><strong>61%</strong></div>
                            <div className="float-right"><small className="text-muted">Yesterday</small></div>
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-gray" role="progressbar" styles="width: 61%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span className="text-uppercase font-10">Open Tickets</span>
                        </div>
                        <div className="col-6 col-xl-3 col-md-6">
                          <h5>06</h5>
                          <div className="clearfix">
                            <div className="float-left"><strong>100%</strong></div>
                            <div className="float-right"><small className="text-muted">Yesterday</small></div>
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-gray" role="progressbar" styles="width: 100%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span className="text-uppercase font-10">Solved Tickets</span>
                        </div>
                        <div className="col-6 col-xl-3 col-md-6">
                          <h5>11</h5>
                          <div className="clearfix">
                            <div className="float-left"><strong>87%</strong></div>
                            <div className="float-right"><small className="text-muted">Yesterday</small></div>
                          </div>
                          <div className="progress progress-xs">
                            <div className="progress-bar bg-gray" role="progressbar" styles="width: 87%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span className="text-uppercase font-10">Unresolved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Project Statistics</h3>
                      <div className="card-options">
                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row text-center">
                        <div className="col-4 border-right pb-4 pt-4">
                          <label className="mb-0 font-13">Total Project</label>
                          <h4 className="font-30 font-weight-bold text-col-blue counter">42</h4>
                        </div>
                        <div className="col-4 border-right pb-4 pt-4">
                          <label className="mb-0 font-13">On Going</label>
                          <h4 className="font-30 font-weight-bold text-col-blue counter">23</h4>
                        </div>
                        <div className="col-4 pb-4 pt-4">
                          <label className="mb-0 font-13">Pending</label>
                          <h4 className="font-30 font-weight-bold text-col-blue counter">8</h4>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-striped table-vcenter mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>35%</strong></div>
                                <div className="float-right"><small className="text-muted">Design Team</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-azure" role="progressbar" styles="width: 35%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>25%</strong></div>
                                <div className="float-right"><small className="text-muted">Developer Team</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-green" role="progressbar" styles="width: 25%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>15%</strong></div>
                                <div className="float-right"><small className="text-muted">Marketing</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-orange" role="progressbar" styles="width: 15%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>20%</strong></div>
                                <div className="float-right"><small className="text-muted">Management</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-indigo" role="progressbar" styles="width: 20%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="clearfix">
                                <div className="float-left"><strong>11%</strong></div>
                                <div className="float-right"><small className="text-muted">Other</small></div>
                              </div>
                              <div className="progress progress-xs">
                                <div className="progress-bar bg-pink" role="progressbar" styles="width: 11%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
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

      </section>
    </Fragment>
  );
};

DashboardTab.propTypes = {};

export default DashboardTab;
