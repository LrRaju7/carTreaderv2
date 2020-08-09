import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { getUserByToken, updateUserProfile } from '../../../actions/user';
import { Link } from 'react-router-dom';
import Spinner from '../../Layouts/Components/Spinner';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../../../styles/components/_dashboard.scss';

const AuctionsPage = ({
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

  const {
    name,
    email,
    location,
    avatar,
    role,
  } = formData;

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

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return loading || data === null ? (
    <Spinner />
  ) : (
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
                              <img src="https://i.ytimg.com/vi/u1dVdYLMCK4/maxresdefault.jpg" className="rounded-circle image-size shadow" alt="100x100" />
                            </span>
                          </Col>
                          <Col lg={8} className='text-center'>
                            <span>
                              <div className='mt-3'>
                              <h1>Welcome {name} <span class="badge badge-pill badge-success">{role}</span></h1>
                              </div>
                            </span>
                            <p className='blockquote mt-3'>{email} </p>
                            <div className="text-center">
                              <Link to={`#`}>
                                <button style={{ width: '50%' }} className="btn btn-outline-dark shadow" type="button">View Profile</button>
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <Nav tabs className="nav-justified mt-3">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                      >
                        <h2 className='card-title'>Bids</h2>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                      >
                        <h2 className='card-title'>Auctions</h2>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <div className="row clearfix row-deck mt-3">
                            <div className="col-xl-9 col-lg-12">
                              <div className="card bg-light">
                                <div className="card-header">
                                  <h3 className="card-title">Bidding Details</h3>
                                </div>
                                <div className='table-responsive'>
                                  <table className="table table-bordered table-striped table-light table-hover">
                                    <thead>
                                      <tr>
                                        <th scope="col">SL</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Higest Bid</th>
                                        <th scope="col">Your Bid</th>
                                        <th scope="col">Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>7</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">6</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>7</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">7</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">8</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>19</td>
                                      </tr>
                                      <tr>
                                        <th scope="row">9</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>7</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-12">
                              <div className="card bg-light">
                                <div className="card-header">
                                  <h3 className="card-title">Bidding Statistics</h3>
                                  <div className="card-options">
                                    <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                    <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                    <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <div className="row text-center">
                                    <div className="col-4 border-right pb-4 pt-4">
                                      <label className="mb-0 font-13">Total Bids</label>
                                      <h4 className="font-30 font-weight-bold text-col-blue counter">10</h4>
                                    </div>
                                    <div className="col-4 border-right pb-4 pt-4">
                                      <label className="mb-0 font-13">On Going</label>
                                      <h4 className="font-30 font-weight-bold text-col-blue counter">2</h4>
                                    </div>
                                    <div className="col-4 pb-4 pt-4">
                                      <label className="mb-0 font-13">Bids Won</label>
                                      <h4 className="font-30 font-weight-bold text-col-blue counter">3</h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="table-responsive text-white">
                                  <table className="table table-striped table-vcenter mb-0">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <div className="clearfix ">
                                            <div className="float-left"><strong >35%</strong></div>
                                            <div className="float-right"><small className='text-muted'>Design Team</small></div>
                                          </div>
                                          <div className="progress bg-white">
                                            <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="clearfix">
                                            <div className="float-left"><strong >25%</strong></div>
                                            <div className="float-right"><small className='text-muted'>Developer Team</small></div>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="clearfix">
                                            <div className="float-left"><strong >15%</strong></div>
                                            <div className="float-right"><small className='text-muted'>Marketing</small></div>
                                          </div>
                                          <div className="progress bg-white">
                                            <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="clearfix">
                                            <div className="float-left"><strong >20%</strong></div>
                                            <div className="float-right"><small className='text-muted'>Management</small></div>
                                          </div>
                                          <div className="progress">
                                            <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <div className="clearfix">
                                            <div className="float-left"><strong >11%</strong></div>
                                            <div className="float-right"><small className='text-muted'>Other</small></div>
                                          </div>
                                          <div className="progress bg-white">
                                            <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '11%' }} aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>

                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <Row>
                            <Col sm="12">
                              <div className="row clearfix row-deck mt-3">
                                <div className="col-xl-3 col-lg-12">
                                  <div className="card bg-light">
                                    <div className="card-header">
                                      <h3 className="card-title">Auction Statistics</h3>
                                      <div className="card-options">
                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                      </div>
                                    </div>
                                    <div className="card-body">
                                      <div className="row text-center">
                                        <div className="col-4 border-right pb-4 pt-4">
                                          <label className="mb-0 font-13">Total Auctions</label>
                                          <h4 className="font-30 font-weight-bold text-col-blue counter">11</h4>
                                        </div>
                                        <div className="col-4 border-right pb-4 pt-4">
                                          <label className="mb-0 font-13">On Going</label>
                                          <h4 className="font-30 font-weight-bold text-col-blue counter">4</h4>
                                        </div>
                                        <div className="col-4 pb-4 pt-4">
                                          <label className="mb-0 font-13">Auction Ended</label>
                                          <h4 className="font-30 font-weight-bold text-col-blue counter">7</h4>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="table-responsive text-white">
                                      <table className="table table-striped table-vcenter mb-0">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <div className="clearfix ">
                                                <div className="float-left"><strong >35%</strong></div>
                                                <div className="float-right"><small className='text-muted'>Design Team</small></div>
                                              </div>
                                              <div className="progress bg-white">
                                                <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="clearfix">
                                                <div className="float-left"><strong >25%</strong></div>
                                                <div className="float-right"><small className='text-muted'>Developer Team</small></div>
                                              </div>
                                              <div className="progress">
                                                <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="clearfix">
                                                <div className="float-left"><strong >15%</strong></div>
                                                <div className="float-right"><small className='text-muted'>Marketing</small></div>
                                              </div>
                                              <div className="progress bg-white">
                                                <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '15%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="clearfix">
                                                <div className="float-left"><strong >20%</strong></div>
                                                <div className="float-right"><small className='text-muted'>Management</small></div>
                                              </div>
                                              <div className="progress">
                                                <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <div className="clearfix">
                                                <div className="float-left"><strong >11%</strong></div>
                                                <div className="float-right"><small className='text-muted'>Other</small></div>
                                              </div>
                                              <div className="progress bg-white">
                                                <div className="progress-bar bg-azure progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '11%' }} aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-9 col-lg-12">
                                  <div className="card bg-light">
                                    <div className="card-header">
                                      <h3 className="card-title">Auction Details</h3>
                                    </div>
                                    <div className='table-responsive'>
                                      <table className="table table-bordered table-striped table-light table-hover">
                                        <thead>
                                          <tr>
                                            <th scope="col">SL</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Higest Bid</th>
                                            <th scope="col">Your Bid</th>
                                            <th scope="col">Status</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>7</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>7</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">7</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">8</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>19</td>
                                          </tr>
                                          <tr>
                                            <th scope="row">9</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>7</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  <div className="card-deck">
                    <div className="card bg-light">
                      <img className="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>
                    <div className="card bg-light">
                      <img className="card-img-top" src="https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </div>
                    </div>
                    <div className="card bg-light">
                      <img className="card-img-top" src="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg" alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
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


AuctionsPage.propTypes = {};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  getUserByToken,
})(AuctionsPage);