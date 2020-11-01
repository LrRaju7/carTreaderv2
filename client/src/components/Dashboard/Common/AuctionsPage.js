import React, { useState, useEffect, Fragment } from 'react';
import {
  getListing,
  placeBid,
  getListings,
  clearListing,
  clearListings
} from '../../../actions/listing';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListingPage from '../../Listing/ListingPage'
import { connect } from 'react-redux';
import { getUserByToken, updateUserProfile } from '../../../actions/user';
import { Link } from 'react-router-dom';
import BiddingHistory from '../BiddingHistoryPage'
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
    id: '',
  });

  const {
    name,
    email,
    location,
    avatar,
    role,
    id,
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
      id: loading || !data._id ? '' : data._id,
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
            <div className='p-3 mb-5 bg-white rounded'>
              <div className="section-body mt-3 mb-5">
                <div className="container-fluid">
                  <div className="row clearfix">
                    <div className="col-lg-12">
                      <div className="mb-4">
                        <Row>
                          <Col lg={4} className='text-center'>
                            <span>
                              <img src={data.avatar[0].avatar}  className="rounded-circle image-size shadow" alt="100x100" />
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
                              <Link to={`/profile/${data._id}`}>
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
                        <h2 className='card-title'>Auctions</h2>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                      >
                        <h2 className='card-title'>Bids</h2>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="2">
                      <Row>
                        <Col sm="12">
                          <BiddingHistory/>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="1">
                      <Row>
                        <Col sm="12">
                          <Row>
                            <Col sm="12">
                            <ListingPage/>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
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