import React, { useState, useEffect, Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createListing } from '../../actions/listing';
import { Helmet } from 'react-helmet';
import ReCAPTCHA from 'react-google-recaptcha';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import 'react-datepicker/dist/react-datepicker.css';

const CreateListingPage = ({ createListing, history, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    minIncrement: '',
    category: '',
    length: '',
    condition: 'used',
    startPrice: ''
  });

  let {
    title,
    description,
    minIncrement,
    category,
    condition,
    startPrice
  } = formData;

  const [pictures, setPictures] = useState([]);

  const [endDate, setEndDate] = useState(new Date());

  const [verified, setVerified] = useState(false);

  const [uploading, setUploading] = useState(false);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setUploading(true);
    if (verified) {
      let img;
      if (pictures[0]) {
        let formData = new FormData();
        formData.append('image', pictures[0][0]);
        img = (await axios.post('/api/listings/upload/image', formData)).data
          .url;
      }
      createListing(
        title,
        description,
        minIncrement,
        category,
        endDate,
        condition,
        startPrice,
        img
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
          <Input type="text" name="category" id="category" value={category} onChange={e => onChange(e)} required/>
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
              onChange={e => onChange(e)}
              name='condition'
              value={condition}
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
              selected={endDate}
              onChange={date => setEndDate(date)}
              minDate={new Date()}
              dateFormat='MMMM d, yyyy'
              required
            />
        </FormGroup>
        <FormGroup  >
          <Label for="slug">Active</Label>
          <select class="custom-select">
            <option selected value={true}>Active</option>
            <option value={false} >Inactive</option>
          </select>
        </FormGroup>
        <div className='form-group'>
            <h4 className='medium-heading'>Captcha</h4>
            <div className='recaptcha-container'>
              <ReCAPTCHA
                sitekey='6Lcck9cUAAAAAIuHfUVETNVzklfJ6QkJ69V5tor0'
                onChange={verifyCallback}
              />
            </div>
          </div>
        <Input type='submit' className="btn btn-block btn-success mt-5 shadow" value={uploading ? 'Creating..' : 'Create listing'}/>
      </Form>
    </Fragment>
  );
};

CreateListingPage.propTypes = {};

export default connect(null, { createListing })(CreateListingPage);
