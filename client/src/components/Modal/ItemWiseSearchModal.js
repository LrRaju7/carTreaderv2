import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings, clearListings } from '../../actions/listing';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Modal from 'react-modal'
const customStyles = {
    content: {
    width: '60%',
    transform: 'translate(30%, 15%)',
    backgroundColor: 'white',
    },
  };

const ItemWiseSearch = ({ getListings, clearListings }) => {
    const [formData, setFormData] = useState({
        query: '',
        category: 'All Categories'
    });

    let { query, category } = formData;
    let history = useHistory();

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        console.log('Searching.....!!!')
    };
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <section>
            <a style={{ cursor: 'pointer' }} onClick={() => setModalIsOpen(true)}>Advanced Search</a>
            <Modal className="m-5" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <div className="main justify-content-center p-3 mb-5 bg-white rounded">
                    <h1 className="text-center">Advanced Search</h1>
                    <Form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <Label for="brand">Brand</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='brand'
                            >
                                <option selected></option>
                                <option>BMW</option>
                                <option>Nishan</option>
                                <option>Honda</option>
                                <option>Toyota</option>
                                <option>Mazda</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="model">Model</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='model'
                            >
                                <option selected></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="year">Year</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='year'
                            >
                                <option selected></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="capacity">Engine Capacity</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='capacity'
                            >
                                <option selected></option>
                                <option>500 cc</option>
                                <option>1200 cc</option>
                                <option>1300 cc</option>
                                <option>2000 cc</option>
                                <option>5000 cc</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="type">Engine Type</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='type'
                            >
                                <option selected></option>
                                <option>Inline-4</option>
                                <option>Inline-6</option>
                                <option>V6</option>
                                <option>V8</option>
                                <option>V12</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="condition">Condition</Label>
                            <select className='form-control'
                                onChange={e => onChange(e)}
                                name='condition'
                            >
                                <option selected></option>
                                <option>Brand New</option>
                                <option>Recondition</option>
                                <option>Used</option>
                                <option>Salvage</option>
                            </select>
                        </div>
                        <div className='text-center'>
                            <Button style={{ width: '50%' }} className="btn btn-success mt-5 shadow">Search Item</Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </section>

    );
};

export default connect(null, { getListings, clearListings })(ItemWiseSearch);
