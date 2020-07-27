import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input,FormText, Container } from 'reactstrap';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    address: '',
    address2: '',
    termsAndConditions: '',
    city: '',
    state: '',
    zip: '',
    file: '',
  });

  const { email, name, password, passwordConfirm, phone, address, address2, termsAndConditions, city, state, zip, file} = formData;

  const [verified, setVerified] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (verifyCallback) {
      register(name, email, password, passwordConfirm, phone, address, address2, termsAndConditions, city, state, zip, file);
    } else {
      alert('Do the CAPTCHA');
    }
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
          <Label for="exampleName">Auctioneer Name</Label>
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
          <Label for="examplePhone">Auctioneer Phone</Label>
          <Input type="number" name="phone" value={phone} id="examplephone" onChange={e => onChange(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Auctioneer Address</Label>
          <Input type="text" name="address" value={address} id="exampleAddress" onChange={e => onChange(e)}/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" value={city} id="exampleCity" onChange={e => onChange(e)}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" value={state} id="exampleState" onChange={e => onChange(e)}/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" value={zip} id="exampleZip" onChange={e => onChange(e)}/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup>
        <Label for="exampleFile">Auctioneer Trade License</Label>
        <Input type="file" name="file" value={file} id="exampleFile" multiple onChange={e => onChange(e)}/>
        <FormText color="muted">
          Please upload your tradelicense above. PDF or jpeg format only.
        </FormText>
      </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="termsAndConditions" value={termsAndConditions} id="exampleTerms" onChange={e => onChange(e)}/>
          <Label for="exampleTerms" check>I agree with terms and conditions.</Label>
        </FormGroup>
        <FormGroup>
          <p className='small-text'>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </FormGroup>
        <Button className="btn-success shadow">Register</Button>
      </Form>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
