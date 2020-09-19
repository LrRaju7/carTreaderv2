import {
  GET_LISTINGS,
  CLEAR_LISTINGS,
  GET_USERS_ACTIVE_LISTINGS,
  GET_USERS_INACTIVE_LISTINGS,
  GET_WON_LISTINGS,
  DELETE_LISTING
} from '../actions/types';

const initialState = {
  data: null,
  numListings: null,
  loading: true,
  listings: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WON_LISTINGS:
    case GET_USERS_INACTIVE_LISTINGS:
    case GET_USERS_ACTIVE_LISTINGS:
    case GET_LISTINGS:
      console.log("LISTER LISTER")
      console.log(payload)
      console.log("LISTER LISTER")
      return {
        ...state,
        listings: payload.data.listings,
        numListings: payload.listings,
        loading: false
      };
    case CLEAR_LISTINGS:
      return {
        ...state,
        data: null,
        loading: true
      };
    case DELETE_LISTING:
      return {
        ...state,
        data: state.data.filter(listing => listing._id !== payload._id)
      };
    default:
      return state;
  }
}