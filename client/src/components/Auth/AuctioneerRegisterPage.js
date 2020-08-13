import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { Col, Row, Button, Form, FormGroup, Label, Input,FormText} from 'reactstrap';

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
    role: 'Auctioneer'
  });
  const [verified, setVerified] = useState(false);
  const role = 'Auctioneer'
  
  const { email, name, password, passwordConfirm, phone, location, nid, tradeLicense} = formData;

  
  console.log(verified)

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("----------------------------->ROLE IS ", role)
    console.log("----------------------------->PHONE IS ", phone)
    console.log("----------------------------->LOCATION IS ", location)
    if (verifyCallback) {
      register(email, name, password, passwordConfirm, location, phone, role, nid, tradeLicense);
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
          <Input type="text" name="location" value={location} id="exampleAddress" onChange={e => onChange(e)}/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleFile">Auctioneer Trade License</Label>
        <Input type="file" name="tradeLicense" value={tradeLicense} id="exampleFile" multiple onChange={e => onChange(e)}/>
        <FormText color="muted">
          Please upload your tradelicense above. PDF or jpeg format only.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Auctioneer NID</Label>
        <Input type="file" name="nid" value={nid} id="exampleFile" multiple onChange={e => onChange(e)}/>
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
