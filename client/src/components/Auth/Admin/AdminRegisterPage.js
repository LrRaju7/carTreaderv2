import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input,FormText, Container } from 'reactstrap';

const AdminRegister = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    file: '',
  });

  const { email, name, password, passwordConfirm, phone, address, address2, city, state, zip, file} = formData;

  const [verified, setVerified] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (verified) {
      register(name, email, password, passwordConfirm, phone, address, address2, city, state, zip, file);
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
        <Form style={{width: '100%'}}>
        <FormGroup>
          <Label for="exampleName">Admin Name</Label>
          <Input type="text" name="name" id="examplename"/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <Row form>
          <Col md={6}>
          <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePasswordConfirm">Confirm Password</Label>
              <Input type="password" name="passwordConfirm" id="examplePasswordConfirm"/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="examplePhone">Admin Phone</Label>
          <Input type="number" name="phone" id="examplephone"/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleFile">Admin Trade License</Label>
        <Input type="file" name="file" id="exampleFile" multiple/>
        <FormText color="muted">
          Please upload your tradelicense above. PDF or jpeg format only.
        </FormText>
      </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Admin Address</Label>
          <Input type="text" name="address" id="exampleAddress"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button className="btn-success">Register</Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(AdminRegister);
