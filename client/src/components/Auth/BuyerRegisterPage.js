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
  });

  const { email, name, password, passwordConfirm, phone, address, address2, termsAndConditions, city, state, zip} = formData;

  const [verified, setVerified] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (verifyCallback) {
      register(name, email, password, passwordConfirm, phone, address, address2, termsAndConditions, city, state, zip);
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
    <Container className='mt-5'>
        <Form style={{width: '100%'}} action="/api/users" method="POST" onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label for="exampleName">Buyer Name</Label>
          <Input type="text" name="name" value={name} id="examplename"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={email} id="exampleEmail" />
        </FormGroup>
        <Row form>
          <Col md={6}>
          <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" value={password} id="examplePassword"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePasswordConfirm">Confirm Password</Label>
              <Input type="password" name="passwordConfirm" value={passwordConfirm} id="examplePasswordConfirm"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="examplePhone">Buyer Phone</Label>
          <Input type="number" name="phone" value={phone} id="examplephone"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Buyer Address</Label>
          <Input type="text" name="address" value={address} id="exampleAddress"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" value={city} id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" value={state} id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" value={zip} id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="termsAndConditions" value={termsAndConditions} id="exampleTerms"/>
          <Label for="exampleTerms" check>I agree with terms and conditions.</Label>
        </FormGroup>
        <FormGroup>
          <p className='small-text'>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </FormGroup>
        <Button className="btn-success">Register</Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
