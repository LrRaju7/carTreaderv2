import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import ImageUploader from 'react-images-upload';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    location: '',
    phone:'',
    role:'Buyer',
  });

  const avatar = [];
  const [pictures, setPictures] = useState([]);
  const [uploading, setUploading] = useState(false);

  const role = 'Buyer'
  const { email, name, password, passwordConfirm, location, phone} = formData;
  const [verified, setVerified] = useState(false);
  console.log(verified)
  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
    
  const onSubmit = async e => {
    e.preventDefault();
    setUploading(true);
    console.log("----------------------------->ROLE IS ", role)
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
      register(name, email, password, passwordConfirm, avatar, location, phone, role);
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
        <Form style={{width: '100%'}} action="/api/users" method="POST" onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for="exampleName">Buyer Name</Label>
          <Input type="text" name="name" value={name} id="examplename" onChange={e => onChange(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={email} id="exampleEmail" onChange={e => onChange(e)}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
          <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" value={password} id="examplePassword" onChange={e => onChange(e)}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePasswordConfirm">Confirm Password</Label>
              <Input type="password" name="passwordConfirm" value={passwordConfirm} id="examplePasswordConfirm" onChange={e => onChange(e)}/>
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
          <Label for="examplePhone">Buyer Phone</Label>
          <Input type="number" name="phone" value={phone} id="examplephone" onChange={e => onChange(e)}/>
        </FormGroup>
        {/* <FormGroup>
        <Label for="exampleAvatar">Avatar</Label>
        <Input type="file" name="avatar" value={avatar} id="exampleAvatar" onChange={e => onChange(e)}/>
      </FormGroup> */}
        <FormGroup>
          <Label for="exampleAddress">Buyer Address</Label>
          <Input type="text" name="location" value={location} id="exampleAddress" onChange={e => onChange(e)}/>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleRole">Role</Label>
          <select className="form-control" name="role" onChange={e => onChange(e)} value>
                                        <option selected></option>
                                        <option value='Buyer'>Buyer</option>
                                    </select>
        </FormGroup> */}
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
        <Button style={{width: '50%'}} className="btn-success shadow"
            disabled={uploading}>{uploading ? 'Registering':'Register'}</Button>
        </div>
      </Form>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
