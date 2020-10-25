import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    location: '',
    nid: '',
    tradeLicense: '',
    role: 'Bidder'
  });

  const avatar = [];
  const [pictures, setPictures] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [verified, setVerified] = useState(false);
  const role = 'Bidder'

  const { email, name, password, passwordConfirm, phone, location, nid, tradeLicense } = formData;


  console.log(verified)
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setUploading(true);
    console.log("----------------------------->ROLE IS ", role)
    console.log("----------------------------->PHONE IS ", phone)
    console.log("----------------------------->LOCATION IS ", location)
    const documents = {
      nid: nid,
      trade_license: tradeLicense,
    };
    console.log("----------------------------->documents.nid IS ", documents.nid)
    console.log("----------------------------->documents.trade_license IS ", documents.trade_license)
    if (verifyCallback) {
      console.log(pictures)
      console.log(pictures[0].length)
      let picData;
      if (pictures[0]) {
        for (const picture of pictures[0]) {
          let formData = new FormData();
          formData.append('image', picture);
          picData = await axios.post('/api/listings/upload/image', formData)
          console.log(picData)
          console.log(picData.data.url)
          console.log(picData.data.imageId)
          // if (picture === pictures[0][0]) {
          //   var feed = { image: picData.data.url, _id: picData.data.imageId, highlighted: true }
          // } else {
          //   var feed = { image: picData.data.url, _id: picData.data.imageId, highlighted: false }
          // }
          var feed = { avatar: picData.data.url, _id: picData.data.imageId, active: true }
          avatar.push(feed)
        }
        console.log(avatar)
      }
      register(name, email, password, passwordConfirm, avatar, location, phone, role, documents.nid, documents.trade_license);
    } else {
      alert('Do the CAPTCHA');
    }
    setUploading(false);
  };

  const verifyCallback = async e => {
    await setVerified(true);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='section-home container-fluid mt-5'>
      <Form style={{ width: '100%' }} action="/api/users" method="POST" onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for="exampleName">Bidder Name</Label>
          <Input type="text" name="name" value={name} id="examplename" onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={email} id="exampleEmail" onChange={e => onChange(e)} />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" value={password} id="examplePassword" onChange={e => onChange(e)} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePasswordConfirm">Confirm Password</Label>
              <Input type="password" name="passwordConfirm" value={passwordConfirm} id="examplePasswordConfirm" onChange={e => onChange(e)} />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="avatar">Avatar</Label>
          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              withPreview={true}
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
              maxFileSize={5242880}
              singleImage={true}
            />
        </FormGroup>
        <FormGroup>
          <Label for="examplePhone">Bidder Phone</Label>
          <Input type="number" name="phone" value={phone} id="examplephone" onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Bidder Address</Label>
          <Input type="text" name="location" value={location} id="exampleAddress" onChange={e => onChange(e)} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Bidder Trade License</Label>
          <Input type="file" name="tradeLicense" value={tradeLicense} id="exampleFile"onChange={e => onChange(e)} />
          <FormText color="muted">
            Please upload your tradelicense above. PDF or jpeg format only.
        </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Bidder NID</Label>
          <Input type="file" name="nid" value={nid} id="exampleFile" onChange={e => onChange(e)} />
          <FormText color="muted">
            Please upload your tradelicense above. PDF or jpeg format only.
        </FormText>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="termsAndConditions" id="exampleTerms"/>
          <Label for="exampleTerms" check>I agree with terms and conditions.</Label>
        </FormGroup>
        <FormGroup>
          <p className='small-text'>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </FormGroup>
        <div className='text-center'>
          <Button style={{ width: '50%' }} className="btn-success shadow">Register</Button>
        </div>
      </Form>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
