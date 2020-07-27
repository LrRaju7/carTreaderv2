import React from 'react';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card, CardImg, CardText, CardBody,CardImgOverlay,
  CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';

import {daysCalculator} from '../../../helpers/functions'
const SubGrid = (props) => {
  return (
    <div>
      <Card style={{marginTop: 20, border:'none'}}>
        {/* <Link to={`/auctions/${props.car.id}`}> */}
        <Link to="/auctions/details">
          <CardImg top width="100%" src={props.car['Main Image']} alt="Card image cap" style={{width: '100%', height: 200, objectFit: 'cover'}}/>
        </Link>
        <CardBody style={{padding: 0}}>
         	<Badge color="dark" style={{fontSize: 16, paddingLeft: 10, paddingRight:  10, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
    				<span style={{float: 'left'}}><FontAwesomeIcon icon={['fal', 'clock']} style={{fontWeight: 100}}/> {daysCalculator(props.car['Ending'])}</span>
    				<span style={{float: 'right'}}><span style={{fontWeight: 300}}>Bid </span>৳{props.car['Highest Bid']}</span>
        	</Badge>        
          <CardTitle style={{marginBottom: 2}}><span style={{fontWeight: 700}}>{props.car['Year']} {props.car['Make']} {props.car['Model']}</span></CardTitle>
          <CardSubtitle>
			<Badge pill color='primary'>Used</Badge>
			<span style={{fontWeight: 500, fontSize: 14, marginLeft: 5}}>Dhaka, Bangladesh</span>
			<p>Listed on {props.car['Listing Date']}</p>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};


export default SubGrid;