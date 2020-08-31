import React from 'react';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card, CardImg, CardText, CardBody,CardImgOverlay,
  CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';

import {daysCalculator} from '../../../helpers/functions'
const SubGrid = ({listing}) => {
  console.log("----+++++------++++++------+++++++------")
  console.log(listing)
  console.log("----+++++------++++++------+++++++------")
  return (
    <div>
      <Card style={{marginTop: 20, border:'none'}}>
        {/* <Link to={`/auctions/${listing.id}`}> */}
        <Link to={`/auctions/${listing.slug}/details`}>
          <CardImg top width="100%" src={listing.images[0].image} alt="Card image cap" style={{width: '100%', height: 200, objectFit: 'cover'}}/>
        </Link>
        <CardBody style={{padding: 0}}>
         	<Badge color="dark" style={{fontSize: 16, paddingLeft: 10, paddingRight:  10, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
    				<span style={{float: 'left'}}><FontAwesomeIcon icon={['fal', 'clock']} style={{fontWeight: 100}}/> {daysCalculator(listing['endDateTime'])}</span>
    				<span style={{float: 'right'}}><span style={{fontWeight: 300}}>Bid </span>৳{listing['highest_bid']['amount']}</span>
        	</Badge>        
          <CardTitle style={{marginBottom: 2}}><span style={{fontWeight: 700}}>{listing.car['year']} {listing.car['make']} {listing.car['model']}</span></CardTitle>
          <CardSubtitle>
			<Badge pill color='primary'>Used</Badge>
			<span style={{fontWeight: 500, fontSize: 14, marginLeft: 5}}>Dhaka, Bangladesh</span>
			<p>Listed on {listing['createdAt']}</p>
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};


export default SubGrid;