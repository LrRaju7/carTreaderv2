import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Badge, Button, Table } from "reactstrap";
import Gallery from "react-grid-gallery";
import Countdown from "react-countdown";
import moment from "moment";
import { getUserByToken} from '../../../actions/user';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "./grid.js";
import { daysCalculator } from "../../../helpers/functions.js";
import images from "../../../data/images.js";
import EntryFee from "../../Modal/EntryFeeModal"
// import PlaceBid from "../../Listing/ListingPage"
import { Link } from "react-router-dom";

const Details = ({ 
  car,
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
      verified: loading || !data.verified.status ? '' : data.verified.status,
    });
  }, [loading, data]);
  console.log("----------------CAR DATA----------------------")
  console.log(car)
  console.log("----------------CAR DATA----------------------")
  let img = car.images
  console.log("----------------IMG----------------------")
  console.log(img)
  console.log("----------------IMG----------------------")
  console.log("----------------IMG LENGTH----------------------")
  let lengthIMG = img.length
  console.log(img.length)
  console.log("----------------IMG LENGTH----------------------")
  let pics = []
  let i
  for(i=1; i < lengthIMG; i++){
    pics.push({src: img[i].image , thumbnail: img[i].image , thumbnailWidth: '300', thumbnailHeight: '300'})
  }

  console.log("----------------PICS----------------------")
  console.log(pics)
  console.log(images)
  console.log("----------------PICS----------------------")

  let enddate = moment(car.endDateTime, "YYYY/MM/DD");
  let endtime = enddate.valueOf();
  let curdate = new Date();
  let curtime = curdate.getTime();
  let diff = endtime - curtime;

  let comp = diff < 0 ? (<span style={{ fontWeight: 600, marginLeft: 10 }}>Ended</span>) : (<Countdown date={Date.now() + diff} />);
  let button = isAuthenticated ?  <EntryFee /> : <Link to={`/login`}><button className="btn btn-outline-dark shadow" type="button" style={{width:'100%'}}>Login to Bid</button></Link>
  return (
    <Container fluid style={{ height: "80vh" }}>
      <Row>
        <Col>
          <div class='auction-title'>
            <h3>
              {car.title}
            </h3>
          </div>
          <div class='d-md-flex justify-content-between flex-wrap'>
            <p style={{ marginBottom: 0 }}>
              {car.car.color.exterior} {car.car.make} {car.car.model}
            </p>
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
            src={car.images[0].image}
          />
        </Col>
        <Col className='nopadl' xs={4}>
          <Gallery
            images={pics}
            tagStyle={{
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 2,
              fontFamily:
                "'Open Sans','Helvetica Neue','Helvetica','Arial','sans-serif'",
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
                        ৳ {car.highest_bid.amount}
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
                        {car.bids}
                      </span>
                    </span>
                  </Col>
                </Row>
              </Badge>
            </Col>
            <Col className='toppad20' md={3}>
              {button}
              {/* <PlaceBid {... car}/> */}
            </Col>
          </Row>
          <Row>
            <Col className='nopad toppad20' md={12}>
              <Table responsive striped bordered hover>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Engine Type</td>
                    <td>{car.car.engine.type}</td>
                    <td style={{ fontWeight: 500 }}>Engine Capacity(CC)</td>
                    <td>{car.car.engine.capacity}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Current price</td>
                    <td>{car.currentPrice}</td>
                    <td style={{ fontWeight: 500 }}>Start Price</td>
                    <td>{car.startPrice}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Body Style</td>
                    <td>{car["Title"]}</td>
                    <td style={{ fontWeight: 500 }}>Exterior Color</td>
                    <td>{car.car.color.exterior}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Car Status</td>
                    <td>{car.car.status}</td>
                    <td style={{ fontWeight: 500 }}>Interior Color</td>
                    <td>{car.car.color.interior}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 500 }}>Seller Status</td>
                    <td>{car.car.status}</td>
                  </tr>
                </tbody>
              </Table>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Highlights</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.highlights}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Equipment</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.equipment}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Modifications</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.modifications}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Issues</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.issues}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Service History</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.service_history}</p>
              </div>
              <div className='nopad toppad20'>
                <hr />
                <br />
                <h3 style={{ fontWeight: 700 }}>Ownership History</h3>
                <br />
                <p style={{ fontSize: 16 }}>{car.car.ownership_history}</p>
                <br />
                <hr />
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Grid sm={6} md={6} lg={6} list_order='newest cars'/>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role
})

export default connect(mapStateToProps, {getUserByToken})(Details)
