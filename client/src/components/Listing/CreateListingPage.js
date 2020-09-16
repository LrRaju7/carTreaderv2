import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createListing } from '../../actions/listing';
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import 'react-datepicker/dist/react-datepicker.css';

const CreateListingPage = ({ createListing, history, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    make:'',
    model:'',
    year:'',
    capacity:'',
    type:'',
    exterior:'',
    interior:'',
    highlights:'',
    equipment:'',
    modifications:'',
    issues:'',
    service_history:'',
    ownership_history:'',
    status:'',
    currentPrice:'',
    startPrice:'',
    minIncrement:''
  });

  const {
    title,
    description,
    make,
    model,
    year,
    capacity,
    type,
    exterior,
    interior,
    highlights,
    equipment,
    modifications,
    issues,
    service_history,
    ownership_history,
    status,
    currentPrice,
    startPrice,
    minIncrement
  } = formData;

  const images = [];

  const [pictures, setPictures] = useState([]);

  const [endDateTime, setEndDateTime] = useState(new Date());

  const [verified, setVerified] = useState(false);

  const [uploading, setUploading] = useState(false);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const car = {
    make: make,
    model: model,
    year: year,
    engine: {
      capacity: capacity,
      type: type,
    },
    color: {
      exterior: exterior,
      interior: interior,		
    },
    highlights: highlights,
    equipment: equipment,
    modifications: modifications,
    issues: issues,
    service_history: service_history,		
    ownership_history: ownership_history,
    status: status,
  }

  const onSubmit = async e => {
    
    e.preventDefault();
    setUploading(true);
    if (verifyCallback) {
      console.log(pictures)
      console.log(pictures[0].length)
      let picData;
      if (pictures[0]) {
        for(const picture of pictures[0]){
        let formData = new FormData();
        formData.append('image', picture);
        picData = await axios.post('/api/listings/upload/image', formData)
        console.log(picData)
        console.log(picData.data.url)
        console.log(picData.data.imageId)
        if(picture === pictures[0][0]){
          var feed = {image: picData.data.url, _id: picData.data.imageId, highlighted: true}
        }else{
          var feed = {image: picData.data.url, _id: picData.data.imageId, highlighted: false}
        }
        images.push(feed) 
        }
        console.log(images)
        console.log(endDateTime);
      }
      createListing(
          title,
          description,
          car,
          images,
          currentPrice,
          startPrice,
          minIncrement,
          endDateTime,
          history
        );
      } else {
        alert('Something Wrong');
      }

    setUploading(false);
  };

  const verifyCallback = e => {
    setVerified(true);
  };

  return (
    <Fragment>
      <h2 className="text-center">
        Tell us about your car
      </h2>

      <p className="h6 lead mt-3">Give us the following info and we’ll quickly review your car to decide if it’s a fit for Cartrader. If your car is accepted, we’ll ask for more details and photos, collect the listing fee, and work with you to get the auction live.</p>
      <Form style={{ width: '100%' }} className="mt-5" encType='multipart/form-data' onSubmit={e => onSubmit(e)}>
        <FormGroup >
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" value={title}
              onChange={e => onChange(e)}
              required/>
        </FormGroup>
        <FormGroup  >
          <Label for="description">Description</Label>
          <textarea className="form-control" type="text" name="description" id="description" rows="5" value={description}
              onChange={e => onChange(e)}
              required/>
        </FormGroup>
        <FormGroup  >
          <Label for="make">Car Make</Label>
          <Input type="text" name="make" id="make" value={make} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="model">Car Model</Label>
          <Input type="text" name="model" id="model" value={model} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="year">Car Year</Label>
          <Input type="text" name="year" id="year" value={year} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="capacity">Car Engine Capacity</Label>
          <Input type="text" name="capacity" id="capacity" value={capacity} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="type">Car Engine Type</Label>
          <Input type="text" name="type" id="type" value={type} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="exterior">Car Color Exterior</Label>
          <Input type="text" name="exterior" id="exterior" value={exterior} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="interior">Car Color Interior</Label>
          <Input type="text" name="interior" id="interior" value={interior} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="highlights">Car Highlights</Label>
          <Input type="text" name="highlights" id="highlights" value={highlights} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="equipment">Car Equipment</Label>
          <Input type="text" name="equipment" id="equipment" value={equipment} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="modifications">Car Modifications</Label>
          <Input type="text" name="modifications" id="modifications" value={modifications} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="issues">Car Issues</Label>
          <Input type="text" name="issues" id="issues" value={issues} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="service_history">Car Service History</Label>
          <Input type="text" name="service_history" id="service_history" value={service_history} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="ownership_history">Car Ownership History</Label>
          <Input type="text" name="ownership_history" id="ownership_history" value={ownership_history} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup >
          <Label for="status">Car Status</Label>
          <Input type="text" name="status" id="status" value={status} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup>
          <Label for="images">Item image</Label>
          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              withPreview={true}
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
              maxFileSize={5242880}
            />
        </FormGroup>
        <FormGroup  >
          <Label for="startPrice">Start Price</Label>
          <Input type="number" name="startPrice" id="startPrice" value={startPrice} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup  >
          <Label for="currentPrice">Current Price</Label>
          <Input type="number" name="currentPrice" id="currentPrice" value={currentPrice} onChange={e => onChange(e)} required/>
        </FormGroup>
        <FormGroup  >
          <Label for="minIncrement">Minimum bid increment</Label>
          <Input type='number'
              name='minIncrement'
              value={minIncrement}
              step='0.01'
              onChange={e => {
                if (
                  /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/.test(e.target.value) ||
                  e.target.value == ''
                ) {
                  setFormData({ ...formData, minIncrement: e.target.value });
                }
              }}/>
        </FormGroup>
        <FormGroup>
          <Label for="endDateTime">Auction end date</Label><br/>
          <DatePicker 
              selected={endDateTime}
              onChange={date => setEndDateTime(date)}
              minDate={new Date()}
              dateFormat='MMMM d, yyyy'
              required
            />
        </FormGroup>
          <div className='text-center'>
        <Input style={{width: 'auto'}} type='submit' className="btn btn-success mt-5 shadow" value={uploading ? 'Creating..' : 'Create listing'} disabled={uploading}/>
        </div>
      </Form>
    </Fragment>
  );
};

CreateListingPage.propTypes = {};

export default connect(null, { createListing })(CreateListingPage);