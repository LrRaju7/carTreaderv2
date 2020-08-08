import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    avatar:'',
    location: '',
    role:'',
    termsAndConditions: '',
  });
  const { email, name, password, passwordConfirm, avatar, location, role,termsAndConditions} = formData;
  const [verified, setVerified] = useState(false);
  console.log(verified)
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (verifyCallback) {
      register(name, email, password, passwordConfirm, avatar, location, role, termsAndConditions);
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
        <Label for="exampleAvatar">Avatar</Label>
        <Input type="file" name="avatar" value={avatar} id="exampleAvatar" onChange={e => onChange(e)}/>
      </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Buyer Address</Label>
          <Input type="text" name="location" value={location} id="exampleAddress" onChange={e => onChange(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleRole">Role</Label>
          <Input type="text" name="role" Value="Buyer" id="exampleRole" readonly='true'/>
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
        <div className='text-center'>
        <Button style={{width: '50%'}} className="btn-success shadow">Register</Button>
        </div>
      </Form>
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
