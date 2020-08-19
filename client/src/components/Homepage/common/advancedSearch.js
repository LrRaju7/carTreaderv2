import React, { useState } from 'react';
import { connect } from 'react-redux';
import { find } from 'underscore'
import { useHistory, Redirect } from 'react-router-dom';
import carData from '../../../data/dummy_cars.js'
import { getListings, clearListings } from '../../../actions/listing';
import { Button, Form, Label } from 'reactstrap';

const AdvancedSearch = ({ getListings, clearListings }) => {
    // const [formData, setFormData] = useState({
    //     brand:'',
    //     model:'',
    //     year:'',
    //     type:'',
    //     condition:'',
    //     category: '',
    // });
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    
    let num;
    // let { query, category } = formData;
    // let history = useHistory();

    // constructor() {
    //     super();
    //     this.state = {
    //       category: ''
    //     };
         
    //     this.handleChange = this.handleChange.bind(this);
    // }
        
    
        
      

    // const onChange = e =>
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // change: function(event){
    //     this.setState({value: event.target.value});
    // };
    let searchElement = []
    const onSubmit = e => {
        
        e.preventDefault()
        console.log('hello')
        console.log(brand)
        let found = carData.filter(found => found.Make == brand && found.Model == model && found.Year == year)
        num = found.length
        console.log(num)
        console.log(found)
        return num;
        
    };

    if(num != 0){
        // let carID = found.map(({ id }) => id);
        // return <Redirect to={`/auctions/${carID}/details`} />
     
         searchElement = <p>Item Found {num}</p>
    }else{
        searchElement = <p>Item Not Found</p>
    }

    let cars = carData
    let carBrand = cars.map(({ Make }) => Make);
    let uCarBrand = [...new Set(carBrand)];
    let carModel = cars.map(({ Model }) => Model);
    let carYear = cars.map(({ Year }) => Year);
    let uCarYear = [...new Set(carYear)];

   

    const MakeItem = function(X) {
        return <option value={X}>{X}</option>;
      };
      const Brand = uCarBrand.map(MakeItem)
      const Model = carModel.map(MakeItem)
      const Year = uCarYear.map(MakeItem)

    return (
        <section>
                <div className="main justify-content-center p-3 bg-white rounded">
                <h4>Filter {num}</h4>
                    {searchElement}
                    <Form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <Label for="brand">Brand</Label>
                            <select className='form-control form-control-sm' value={brand} onChange={e => setBrand(e.target.value)} name='brand'>
                            <option value="" selected></option>
                            {Brand}
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="model">Model</Label>
                            <select className='form-control form-control-sm' value={model} onChange={e => setModel(e.target.value)} name='model'>
                            <option value="" selected></option>
                            {Model}
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="year">Year</Label>
                            <select className='form-control form-control-sm' value={year} onChange={e => setYear(e.target.value)} name='year'>
                            <option value="" selected></option>
                            {Year}
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="type">Engine Type</Label>
                            <select className='form-control form-control-sm'
                                // value={type} 
                                // onChange={e => onChange(e)}
                                name='type'
                            >
                                <option value='' selected></option>
                                <option value='Inline-4'>Inline-4</option>
                                <option value='Inline-6'>Inline-6</option>
                                <option value='V6'>V6</option>
                                <option value='V8'>V8</option>
                                <option value='V12'>V12</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Label for="condition">Condition</Label>
                            <select className='form-control form-control-sm'
                                // value={condition} 
                                // onChange={e => onChange(e)}
                                name='condition'
                            >
                                <option value="" selected></option>
                                <option value='Brand New'>Brand New</option>
                                <option value='Recondition'>Recondition</option>
                                <option value='Used'>Used</option>
                                <option value='Salvage'>Salvage</option>
                            </select>
                        </div>
                        <div className='text-center mb-5'>
                            <Button style={{ width: 'auto' }} className="btn btn-sm btn-success shadow">Search Item</Button>
                        </div>
                    </Form>
                </div>
        </section>

    );
};

export default connect(null, { getListings, clearListings })(AdvancedSearch);
