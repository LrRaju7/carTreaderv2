import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createListing, getListing } from '../../actions/listing';
import { getUserByToken, updateUserProfile, getUserById, } from '../../actions/user';
import { clearReviews, getReviewsWrittenForUser } from '../../actions/review';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Moment from 'react-moment';
import '../../styles/components/_dashboard.scss';
const ListingForm = ({
  createListing,
  getUserById,
  user,
  token,
  type,
  match,
  listing: { loading, listing }
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    minIncrement: '',
    category: '',
    length: '',
    condition: '',
    slug: '',
    images: '',
    createdAt: '',
    cPrice: '',
    price: '',
    createdBy: '',
    endTime: '',
  });

  const {
    title,
    description,
    minIncrement,
    category,
    length,
    condition,
    slug,
    images,
    createdAt,
    currentPrice,
    startPrice,
    createdBy,
    endTime,
  } = formData;

  useEffect(() => {
    setFormData({
      title: loading || type == 'create' ? '' : listing.title,
      description: loading || type == 'create' ? '' : listing.description,
      minIncrement: loading || type == 'create' ? '' : listing.minIncrement,
      category: loading || type == 'create' ? '' : listing.category,
      length: loading || type == 'create' ? '' : listing.length,
      condition: loading || type == 'create' ? '' : listing.condition,
      slug: loading || type == 'create' ? '' : listing.slug,
      images: loading || type == 'create' ? '' : listing.images,
      createdAt: loading || type == 'create' ? '' : listing.createdAt,
      currentPrice: loading || type == 'create' ? '' : listing.currentPrice,
      startPrice: loading || type == 'create' ? '' : listing.startPrice,
      createdBy: loading || type == 'create' ? '' : listing.createdBy,
      endTime: loading || type == 'create' ? '' : listing.endTime
    });
  }, [loading, listing]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    createListing(
      title,
      description,
      minIncrement,
      category,
      length,
      condition,
      slug,
      images,
      createdAt,
      currentPrice,
      startPrice,
      createdBy,
      endTime,
      token
    );
  };

  return (
    <Fragment>
      <h2 className="text-center">
        Tell us about your car
      </h2>

      <p className="h6">Give us the following info and we’ll quickly review your car to decide if it’s a fit for Cartrader. If your car is accepted, we’ll ask for more details and photos, collect the listing fee, and work with you to get the auction live.</p>
      <Form style={{ width: '100%' }} className="mt-5" onSubmit={e => onSubmit(e)}>
        <FormGroup >
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" value={title} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup >
          <Label for="slug">Slug</Label>
          <Input type="text" name="slug" id="slug" value={slug} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="description">Description</Label>
          <textarea className="form-control" type="text" name="description" id="description" rows="5" value={description} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="createdAt">Created At</Label>
          <Input type="date" name="createdAt" id="createdAt" value={createdAt} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label for="images">Images</Label>
          <Input type="file" name="images" id="images" multiple value={images} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup >
          <Label for="condition">Condition</Label>
          <Input type="text" name="condition" id="condition" value={condition} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="cPrcurrentPriceice">Current Price</Label>
          <Input type="number" name="currentPrice" id="currentPrice" value={currentPrice} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="startPrice">Start Price</Label>
          <Input type="number" name="startPrice" id="startPrice" value={startPrice} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="minIncrement">Min Increment</Label>
          <Input type="number" name="minIncrement" id="minIncrement" value={minIncrement} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="createdBy">Created By</Label>
          <Input type="text" name="createdBy" id="createdBy" value={createdBy} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="endTime">End Date Time</Label>
          <Input type="date" name="endTime" id="endTime" value={endTime} onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup  >
          <Label for="slug">Active</Label>
          <select class="custom-select">
            <option selected value={true}>Active</option>
            <option value={false} >Inactive</option>
          </select>
        </FormGroup>
        <Button className="btn btn-block btn-success mt-5">Post Item</Button>
      </Form>
    </Fragment>
  );
};

ListingForm.propTypes = {};

const mapStateToProps = state => ({
  token: state.auth.token,
  listing: state.listing
});

export default connect(mapStateToProps, { createListing })(ListingForm);
