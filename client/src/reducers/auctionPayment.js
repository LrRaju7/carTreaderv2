import {
    GET_AUCTIONPAYMENT,
    AUCTIONPAYMENT_ERROR
  } from '../actions/types';
  
  const initialState = {
    data: null,
    loading: true,
    errors: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_AUCTIONPAYMENT: {
        return { ...state, data: payload, loading: false };
      }
      case AUCTIONPAYMENT_ERROR:
        return {
          ...state,
          data: [],
          loading: false,
          errors: 'ERROR'
        };
      default:
        return state;
    }
  }