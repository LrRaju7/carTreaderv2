import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getListings, clearListings } from '../../actions/listing';

const SearchBar = ({ getListings, clearListings }) => {
  const [formData, setFormData] = useState({
    query: '',
    category: 'All Categories'
  });

  let { query, category } = formData;
  let history = useHistory();

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    clearListings();
    let search = '';
    if (query) {
      search = '?search=' + query.split(' ').join('+');
    }
    if (category !== '' && category !== 'All Categories') {
      query === ''
        ? (search = '?category=' + category)
        : (search = search + '&category=' + category);
    }
    search === ''
      ? (search = `?limit=${10}&page=${1}`)
      : (search = search + `&limit=${10}&page=${1}`);

    history.push(`/listings${search}`);
    getListings(search);
  };

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-btn">
          <button className="btn btn-default mr-3" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect(null, { getListings, clearListings })(SearchBar);
