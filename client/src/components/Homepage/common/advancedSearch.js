import React, { useState } from 'react';
import { connect } from 'react-redux';
import { find } from 'underscore'
import Grid from './grid'
import { useHistory, Redirect } from 'react-router-dom';
import carData from '../../../data/dummy_cars.js'
import { getListings, clearListings } from '../../../actions/listing';
import { Button, Form, Label } from 'reactstrap';

const AdvancedSearch = ({ getListings, clearListings }) => {
    
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    
    let num = -1;
    
    let searchElement = []
    const onSubmit = e => {
        e.preventDefault()
        console.log('hello')
        console.log(brand)
        let found = carData.filter(found => found.Make == brand && found.Model == model && found.Year == year)
        num = found.length
        console.log("<-----------------------TOTAL ITEM--------------------->")
        console.log(num)
        console.log("<-----------------------ITEM DETAILS--------------------->")
        console.log(found)
    //     if(num == 1){
    //         const id = found[0].id
            
    //     console.log("<-----------------------ITEM ID--------------------->")
    //     console.log(found[0].id)
    //         // return <Redirect to='/dashboard'/>
    //         searchElement = <p>Item Found</p>
    //        return searchElement;
    //    }else{
    //        searchElement = <p>Item Not Found</p>
    //        return searchElement;
    //    }
       
        return num;
    };

    if (num == 1) {
        return <Redirect to='/dashboard' />;
      }
    

    let cars = carData
    let carBrand = cars.map(({ Make }) => Make);
    let uCarBrand = [...new Set(carBrand)];
    let carModel = cars.map(({ Model }) => Model);
    let uCarModel = [...new Set(carModel)];
    let carYear = cars.map(({ Year }) => Year);
    let uCarYear = [...new Set(carYear)];
    uCarBrand = uCarBrand.sort();
    uCarModel = uCarModel.sort();
    uCarModel = uCarModel.sort((a,b) => a - b);
    uCarYear = uCarYear.sort((a,b) => a - b);

    const MakeItem = function(X) {
        return <option value={X}>{X}</option>;
      };
      const Brand = uCarBrand.map(MakeItem)
      const Model = uCarModel.map(MakeItem)
      const Year = uCarYear.map(MakeItem)

    return (
        <section>
                <div className="main justify-content-center p-3 bg-white rounded">
                <h4>Filter</h4>
                    
                    <Form style={{width: '100%'}} onSubmit={e => onSubmit(e)}>
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
                    <div>
                    {searchElement}
                    </div>
                </div>
        </section>

    );
};

export default connect(null, { getListings, clearListings })(AdvancedSearch);
