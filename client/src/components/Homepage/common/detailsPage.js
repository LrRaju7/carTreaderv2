import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { find } from 'underscore'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import carData from '../../../data/dummy_cars.js'
import {getListings} from '../../../actions/listing'
import PageSpinner from '../../Layouts/Components/Spinner.js'
import Details from './details'

class DetailsPage extends React.Component {   
  static propTypes = {
    perPage: 8,
  };  

  constructor(props) {
    super(props);
    this.state = {
    data: [],
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
    this.props.getListings()
    let newlist = this.props.getListings()
    console.log(newlist)
    setTimeout(() => this.setState({data: newlist, loading: false }), 500);
  }

  render() {
    let props = this.props
    console.log(props)
    let {listings} = this.props
    console.log("???????????????????????????????????????????????????????")
    console.log(listings)
    console.log("???????????????????????????????????????????????????????")

    let list = find(listings, list => list._id == this.props.match.params.id)
    console.log("???????????????????????????????????????????????????????")
    console.log(list)
    console.log("???????????????????????????????????????????????????????")

  	let loader = this.state.loading ? <PageSpinner loading={this.state.loading}/> : <Details car={list} user={this.state.user}/>
    console.log(list)
    console.log(this.state.user)
      return (
        <div>
          {loader}
        </div>
      );
  }
}

const mapStateToProps = state => ({
  listings: state.listings.listings
});

export default connect(mapStateToProps, {
  getListings,
})(DetailsPage);