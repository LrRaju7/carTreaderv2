import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { find } from 'underscore'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import carData from '../../../data/dummy_cars.js'
import PageSpinner from '../../Layouts/Components/Spinner.js'
import Details from './details'

class DetailsPage extends React.Component {   
  static propTypes = {
    perPage: 12,
  };  

  constructor(props) {
    super(props);
    this.state = {
		car: null,
    loading: true
    };
  }  
  static getDerivedStateFromProps(nextProps, prevState) {
    let id = nextProps.match.params.id;
    console.log('id is', id)
    let car = find(carData, car => car.id == id)
    let cars = carData
    let carBrand = cars.map(({ Make }) => Make);
    let uCarBrand = [...new Set(carBrand)];
    console.log("__-------------------------->ALL CARS<-------------------------___")
    console.log(cars)
    console.log("__-------------------------->CAR BRANDS<-------------------------___")
    console.log(uCarBrand)
    return {
      car
    };
   
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("UPDATIns")
    console.log(nextProps)
    console.log(nextState)
    return true
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log('id is', id)
    let car = find(carData, car => car.id == id)
    setTimeout(() => this.setState({car, loading: false }), 500);
  }

  render() {
  	let loader = this.state.loading ? <PageSpinner loading={this.state.loading}/> : <Details car={this.state.car} user={this.state.user}/>
    console.log(this.state.car)
    console.log(this.state.user)
      return (
        <div>
          {loader}
        </div>
      );
  }
}
export default DetailsPage;