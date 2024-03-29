import React, { Component, Fragment } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap'
import '../../styles/components/_dashboard.scss'
class Contact extends Component {
    render() {
        return (
            <Fragment>
                <section className='section-home container-fluid'>
                    <div className="main justify-content-center p-3 mb-5 bg-white rounded">
                        <h1 className="text-center">Contact Us</h1>
                        <Form style={{ width: '100%' }} className="mt-5 ">
                            <FormGroup >
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" />
                            </FormGroup>
                            <FormGroup >
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" />
                            </FormGroup>
                            <FormGroup  >
                                <Label for="description">Description</Label>
                                <textarea className="form-control" type="text" name="description" id="description" rows="5" />
                            </FormGroup>
                            <div className='text-center'>
                                <Button style={{ width: '50%' }} className="btn-success shadow mt-5">Send</Button>
                            </div>
                        </Form>
                    </div>
                </section>
            </Fragment>
        )
    }
}
export default Contact