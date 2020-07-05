import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { sortBy } from 'underscore'
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import SubGrid from './subgrid'
import moment from 'moment'
import carData from '../../../data/dummy_cars.js'
const list_order = ['newly listed', 'ending soon', 'newest cars', 'oldest cars']
const orderSelector = (list_order, newlist) => {
    switch(list_order) {
      case "ending soon":
          newlist = sortBy(newlist, (o) => moment(o["Ending"], "DD/MM/YYYY").unix());
          break;
      case "newly listed":
          newlist = sortBy(newlist, (o) => moment(o["Listing Date"], "DD/MM/YYYY").unix());
          break;
      case "newest cars":
          newlist = sortBy(newlist, (o) => o["Year"]).reverse();
          break;
      case "oldest cars":
          newlist = sortBy(newlist, (o) => o["Year"]);
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
    let newlist = carData
    newlist = orderSelector(this.props.list_order, newlist)
    newlist = newlist.slice(0,(8+0))    
    this.setState({
      data: newlist,
      pageCount: Math.ceil(carData.length / 8),
    });
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log("hi")
    return true
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    let that = this
    let newlist = carData
    newlist = orderSelector(this.props.list_order, newlist)
    let newstart = 8*selected
    newlist = newlist.slice(newstart,(8+newstart))
    this.setState({ offset: offset }, () => {
     that.setState({
      data: newlist,
      pageCount: Math.ceil(carData.length / 8),
    });
    });
  };

  render() {
    let props = this.props
    let md = props.md ? props.md : 4
    let lg = props.lg ? props.lg : 3
    let sm = props.sm ? props.sm : 6
    let paginate = !props.paginate ? null : <ReactPaginate previousLabel={'previous'} nextLabel={'next'} breakLabel={'...'} breakClassName={'break-me'} pageCount={this.state.pageCount} marginPagesDisplayed={2} pageRangeDisplayed={5} onPageChange={this.handlePageClick} containerClassName={'pagination'} subContainerClassName={'pages pagination'} activeClassName={'active'} />              
      return (
        <div>
          <Row> 
              {this.state.data.map((item, key) => <Col key={key} md={md} lg={lg} sm={sm} ><SubGrid car={item} /></Col>)}

          </Row>
          {paginate}
        </div>
      );
  }
}
export default Grid;