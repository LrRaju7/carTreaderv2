import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { sortBy } from 'underscore'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import SubGrid from './subgrid'
import moment from 'moment'
import carData from '../../../data/dummy_cars.js'
import {getListings} from '../../../actions/listing'
const list_order = ['newly listed', 'ending soon', 'newest cars', 'oldest cars']
const orderSelector = (list_order, newlist , found) => {
    switch(list_order) {
      case "ending soon":
          newlist = sortBy(newlist, (o) => moment(o.endDateTime, "YYYY/MM/DD"));
          console.log("-------------ENDING SOON-------------")
          console.log(newlist)
          console.log("-------------ENDING SOON-------------")
          break;
      case "newly listed":
          newlist = sortBy(newlist, (o) => moment(o.createdAt, "YYYY/MM/DD").unix());
          console.log("-------------NEWLY LISTED-------------")
          console.log(newlist)
          console.log("-------------NEWLY LISTED-------------")
          break;
      case "newest cars":
          newlist = sortBy(newlist, (o) => o.car.year).reverse();
          console.log("-------------NEWEST CARS-------------")
          console.log(newlist)
          console.log("-------------NEWEST CARS-------------")
          break;
      case "oldest cars":
          newlist = sortBy(newlist, (o) => o.car.year);
          console.log("-------------OLDEST CARS-------------")
          console.log(newlist)
          console.log("-------------OLDEST CARS-------------")
          break;
      case "found":
          newlist = found;
          break;
      }
      return newlist
}
class Grid extends React.Component {   
  static propTypes = {
    perPage: 8,
  };  

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      offset: 0,
      pageCount: 1,
      order: 'newly listed'
    };
  }  


  componentDidMount() {
    console.log('mounting',this.props.list_order)
    this.props.getListings()
    let newlist = this.props.getListings()
    console.log(newlist)
    newlist = orderSelector(this.props.list_order, newlist)
    newlist = newlist.slice(0,(8+0))  
    console.log("----------------LISTING ORDER--------------")
    console.log(this.props.list_order)
    console.log(newlist)
    console.log(newlist.length)
    console.log("----------------LISTING ORDER--------------")
    this.setState({
      data: newlist,
      pageCount: Math.ceil(this.props.length / 8),
    });
  }


  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    let that = this
    let newlist = this.props
    newlist = orderSelector(this.props.list_order, newlist)
    console.log(newlist)
    let newstart = 8*selected
    newlist = newlist.slice(newstart,(8+newstart))
    this.setState({ offset: offset }, () => {
     that.setState({
      data: newlist,
      pageCount: Math.ceil(this.props.length / 8),
      
    });
    });
  };

  render() {
    let props = this.props
    console.log(props)
    let {listings} = this.props

    console.log("???????????????????????????????????????????????????????")
    console.log(listings.length)
    console.log("???????????????????????????????????????????????????????")
    listings = orderSelector(this.props.list_order, listings)
    console.log("???????????????????????????????????????????????????????")
    console.log(listings)
    console.log("???????????????????????????????????????????????????????")

    let pgCnt = Math.ceil(listings.length / 8)
    let md = props.md ? props.md : 4
    let lg = props.lg ? props.lg : 3
    let sm = props.sm ? props.sm : 6
    let paginate = !props.paginate ? null : <ReactPaginate previousLabel={'prev'} nextLabel={'next'} breakLabel={'...'} breakClassName={'break-me'} pageCount={pgCnt} marginPagesDisplayed={1} pageRangeDisplayed={1} onPageChange={this.handlePageClick} containerClassName={'pagination'} subContainerClassName={'pages pagination'} activeClassName={'active'} size="sm"/>              
      return (
        <div>
          <Row> 
              {listings.length ? listings.map((item, key) => <Col key={key} md={md} lg={lg} sm={sm} ><SubGrid listing={item} /></Col>) : <h1>NO</h1>}

          </Row>
          {paginate}
        </div>
      );
  }
}

const mapStateToProps = state => ({
  listings: state.listings.listings
});

export default connect(mapStateToProps, {
  getListings,
})(Grid);