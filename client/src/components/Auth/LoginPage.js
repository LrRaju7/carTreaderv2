import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

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

    <section className='section-home container-fluid mt-5'>
      <Form style={{ width: '100%' }} onSubmit={e => onSubmit(e)}>
        <FormGroup >
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" onChange={e => onChange(e)} value={email}/>
        </FormGroup>
        <FormGroup  >
          <Label for="examplepassword">Password</Label>
          <Input type="password" name="password" id="examplepass" onChange={e => onChange(e)} value={password}/>
        </FormGroup>
        <FormGroup>
          <p className='small-text'>
            Don't have an account? <Link to='/register'>Sign up</Link>
          </p>
        </FormGroup>
        <Button className="btn-success">Log in</Button>
      </Form>
    </section>

  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
