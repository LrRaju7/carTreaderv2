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
    images,
    currentPrice,
    startPrice,
    minIncrement
  });

  let {
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
    images,
    currentPrice,
    startPrice,
    minIncrement
  } = formData;

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
    if (verified) {
      let images;
      if (pictures[0]) {
        let formData = new FormData();
        formData.append('image', pictures[0][0]);
        images = (await axios.post('/api/listings/upload/image', formData)).data
          .url;
      }
      createListing(
        title,
        description,
        car,
        images,
        currentPrice,
        startPrice,
        minIncrement,
        endDateTime
      );
      console.log("success")
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
        <FormGroup >
          <Label for="slug">Slug</Label>
          <Input type="text" name="slug" id="slug"  />
        </FormGroup>
        <FormGroup  >
          <Label for="description">Description</Label>
          <textarea className="form-control" type="text" name="description" id="description" rows="5" value={description}
              onChange={e => onChange(e)}
              required/>
        </FormGroup>
        <FormGroup  >
          <Label for="category">Item Category</Label>
          <Input type="text" name="category" id="category"/>
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
        <FormGroup >
          <Label for="condition">Item condition</Label>
          <select className='form-control'
              
            >
              <option value='used'>Used</option>
              <option value='new'>New</option>
            </select>
        </FormGroup>
        <FormGroup  >
          <Label for="cPrcurrentPriceice">Current Price</Label>
          <Input type="number" name="currentPrice" id="currentPrice" />
        </FormGroup>
        <FormGroup  >
          <Label for="startPrice">Item starting price</Label>
          <Input type="number" name="startPrice" id="startPrice" value={startPrice} step='0.01' onChange={e => {
                if (
                  /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/.test(e.target.value) ||
                  e.target.value == ''
                ) {
                  setFormData({ ...formData, startPrice: e.target.value });
                }
              }}/>
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
          <Label for="endTime">Auction end date</Label>
          <Input
              type='date'
              className='form-control'
              selected={endDateTime}
              onChange={date => setEndDateTime(date)}
              minDate={new Date()}
              dateFormat='MMMM d, yyyy'
              required
            />
        </FormGroup>
          <div className='text-center'>
        <Input style={{width: 'auto'}} type='submit' className="btn btn-success mt-5 shadow" value={uploading ? 'Creating..' : 'Create listing'}/>
        </div>
      </Form>
    </Fragment>
  );
};

CreateListingPage.propTypes = {};

export default connect(null, { createListing })(CreateListingPage);
