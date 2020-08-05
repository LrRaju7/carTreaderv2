import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings, clearListings } from '../../actions/listing';
import { Button, Form, Label} from 'reactstrap';
import Modal from 'react-modal'
const customStyles = {
    content: {
        width: 'auto',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 100000,
        overlfow: 'scroll',
        overflowY: 'scroll',
        position: 'absolute',
        border: '1px solid #ccc',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    },
    overlay: {
        zIndex: 1000,
        overlfow: 'scroll',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    }
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
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <div className="main justify-content-center p-3 bg-white rounded">
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
                        <div className='text-center mb-5'>
                            <Button style={{ width: '50%' }} className="btn btn-success mt-5 shadow">Search Item</Button>
                        </div>
                    </Form>
                </div>
            </Modal>
        </section>

    );
};

export default connect(null, { getListings, clearListings })(ItemWiseSearch);
