import React from "react";
import { Container, Row, Col, Badge, Button, Table } from "reactstrap";
import Gallery from "react-grid-gallery";
import Countdown from "react-countdown";
import moment from "moment";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "./grid.js";
import { daysCalculator } from "../../../helpers/functions.js";
import images from "../../../data/images.js";
import EntryFee from "../../Modal/EntryFeeModal"
import { Link } from "react-router-dom";

const Details = ({ car, user, authenticated, role }) => {
  let enddate = moment(car["Ending"], "DD/MM/YYYY");
  let endtime = enddate.valueOf();
  let curdate = new Date();
  let curtime = curdate.getTime();
  let diff = endtime - curtime;
  let comp = diff < 0 ? (<span style={{ fontWeight: 600, marginLeft: 10 }}>Ended</span>) : (<Countdown date={Date.now() + diff} />);
  let button = authenticated ? <Link to='/entryfee'><Button color='primary' style={{ fontSize: 18 }} block>Place Bid</Button></Link> : <Link to='/entryfee'><Button color='secondary' style={{ fontSize: 18 }} block>Login to Bid</Button></Link>
  return (
    <Container fluid style={{ height: "80vh" }}>
      <Row>
        <Col>
          <div class='auction-title'>
            <h3>
              {car["Year"]} {car["Make"]} {car["Model"]}
            </h3>
          </div>
          <div class='d-md-flex justify-content-between flex-wrap'>
            <p style={{ marginBottom: 0 }}>
              {car["Exterior Color"]} {car["Make"]} {car["Model"]}
            </p>
            <a
              href='https://media.carsandbids.com/77de68daecd823babbb58edb1c8e14d7106e83bb/documents/s4s4.YWwFoy-RP.pdf'
              rel='noopener noreferrer'
              class='view-report'
              target='_blank'>
              View Vehicle History Report
            </a>
          </div>
        </Col>
        <br />
        <br />
        <br />
        <br />
      </Row>
      <Row>
        <Col className='nopadr' xs={8}>
          <img
            style={{
              width: "100%",
              height: 550,
              objectFit: "cover",
            }}
            src={car["Main Image"]}
          />
        </Col>
        <Col className='nopadl' xs={4}>
          <Gallery
            images={images}
            tagStyle={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 2,
              fontFamily:
                "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
              fontSize: 14,
            }}
            enableImageSelection={false}
            maxRows={3}
          />
        </Col>
      </Row>
      <Row className=''>
        <Col md={8} className='nopad'>
          <Row>
            <Col className='nopad toppad20' md={9}>
              <Badge
                color='dark'
                style={{
                  fontSize: 22,
                  padding: 10,
                  width: "100%",
                }}>
                <Row>
                  <Col lg={4}>
                    <span style={{ fontWeight: 300 }}>
                      <FontAwesomeIcon
                        icon={["fal", "clock"]}
                        style={{ marginRight: 10 }}
                      />
                      Time Left
                      <span
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                        }}>
                        {comp}
                      </span>
                    </span>
                  </Col>
                  <Col lg={4}>
                    <span
                      style={{
                        fontWeight: 300,
                        marginLeft: 20,
                      }}>
                      Highest Bid
                      <span
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                        }}>
                        ৳ {car["Highest Bid"]}
                      </span>
                    </span>
                  </Col>
                  <Col lg={4}>
                    <span
                      style={{
                        fontWeight: 300,
                        marginLeft: 20,
                      }}>
                      # Bids
                      <span
                        style={{
                          fontWeight: 600,
                          marginLeft: 10,
                        }}>
                        {car["Bids"]}
                      </span>
                    </span>
                  </Col>
                </Row>
              </Badge>
            </Col>
            <Col className='toppad20' md={3}>
              {/* {button} */}
              <EntryFee />
            </Col>
          </Row>
          <Row>
            <Col className='nopad toppad20' md={12}>
              <Table responsive striped bordered hover>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500 }}>VIN</td>
                    <td>{car["VIN"]}</td>
                    <td style={{ fontWeight: 500 }}>Engine Capacity(CC)</td>
                    <td>3000</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Mileage</td>
                    <td>{car["Mileage"]}</td>
                    <td style={{ fontWeight: 500 }}>Drive</td>
                    <td>{car["Exterior Color"]}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Body Style</td>
                    <td>{car["Title"]}</td>
                    <td style={{ fontWeight: 500 }}>Exterior Color</td>
                    <td>{car["Exterior Color"]}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Car Status</td>
                    <td>{car["Title"]}</td>
                    <td style={{ fontWeight: 500 }}>Interior Color</td>
                    <td>{car["Interior Color"]}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Seller Status</td>
                    <td>{car["Title"]}</td>
                  </tr>
                </tbody>
              </Table>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Highlights</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Highlights"]}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Equipment</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Equipment"]}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Modifications</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Modifications"]}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Issues</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Issues"]}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Service History</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Service History"]}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Ownership History</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car["Ownership History"]}</p>
                <br />
                <hr />
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Grid sm={6} md={6} lg={6} list_order='ending soon'/>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authenticated: state.auth.authenticated,
  role: state.auth.role
})

export default connect(mapStateToProps, null)(Details)
