import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { find } from 'underscore'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import carData from '../../data/dummy_cars.js'
import PageSpinner from '../../components/pageSpinner.js'
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


  componentDidMount() {
  	let id = this.props.match.params.id;
    let car = find(carData, car => car.id == id)
    setTimeout(() => this.setState({car, loading: false }), 500);
  }

  render() {
  	let loader = this.state.loading ? <PageSpinner loading={this.state.loading}/> : <Details car={this.state.car}/>
      return (
        <div>
          {loader}
        </div>
      );
  }
}
export default DetailsPage;