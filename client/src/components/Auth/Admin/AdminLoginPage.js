import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AdminLogin = ({ login, isAuthenticated }) => {
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
      <div className='row mt-5 align-items-center justify-content-center'>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" />
        </FormGroup>
        <FormGroup>
          <Label for="examplepassword">Password</Label>
          <Input type="password" name="password" id="examplepass"/>
        </FormGroup>
        <Button className="btn-success">Log in</Button>
        </Form>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(AdminLogin);
