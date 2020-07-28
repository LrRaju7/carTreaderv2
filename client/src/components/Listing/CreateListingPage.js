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
        img,
        history
      );
    } else {
      alert('Do the CAPTCHA');
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

      <p className="h6">Give us the following info and we’ll quickly review your car to decide if it’s a fit for Cartrader. If your car is accepted, we’ll ask for more details and photos, collect the listing fee, and work with you to get the auction live.</p>
      <Form style={{ width: '100%' }} className="mt-5" >
        <FormGroup >
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" />
        </FormGroup>
        <FormGroup >
          <Label for="slug">Slug</Label>
          <Input type="text" name="slug" id="slug"  />
        </FormGroup>
        <FormGroup  >
          <Label for="description">Description</Label>
          <textarea className="form-control" type="text" name="description" id="description" rows="5" />
        </FormGroup>
        <FormGroup  >
          <Label for="createdAt">Created At</Label>
          <Input type="date" name="createdAt" id="createdAt" />
        </FormGroup>
        <FormGroup>
          <Label for="images">Images</Label>
          <Input type="file" name="images" id="images" />
        </FormGroup>
        <FormGroup >
          <Label for="condition">Condition</Label>
          <Input type="text" name="condition" id="condition" />
        </FormGroup>
        <FormGroup  >
          <Label for="cPrcurrentPriceice">Current Price</Label>
          <Input type="number" name="currentPrice" id="currentPrice" />
        </FormGroup>
        <FormGroup  >
          <Label for="startPrice">Start Price</Label>
          <Input type="number" name="startPrice" id="startPrice" />
        </FormGroup>
        <FormGroup  >
          <Label for="minIncrement">Min Increment</Label>
          <Input type="number" name="minIncrement" id="minIncrement"  />
        </FormGroup>
        <FormGroup>
          <Label for="endTime">End Date Time</Label>
          <Input type="date" name="endTime" id="endTime" />
        </FormGroup>
        <FormGroup  >
          <Label for="slug">Active</Label>
          <select class="custom-select">
            <option selected value={true}>Active</option>
            <option value={false} >Inactive</option>
          </select>
        </FormGroup>
        <Button className="btn btn-block btn-success mt-5 shadow">Post Item</Button>
      </Form>
    </Fragment>
  );
};

CreateListingPage.propTypes = {};

export default connect(null, { createListing })(CreateListingPage);
