import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='row container'>
        <Form>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input type="email" name="userEmail" id="userEmail"/>
        </FormGroup>
        <FormGroup>
          <Label for="userPass">Password</Label>
          <Input type="password" name="password" id="userPass" />
        </FormGroup>
        <FormGroup>
          <p className='small-text'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </FormGroup>
        <Button>Log in</Button>
        </Form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
