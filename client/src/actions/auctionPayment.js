import axios from 'axios';
import {
  GET_AUCTIONPAYMENT,
  AUCTIONPAYMENT_ERROR,
} from './types';
import { addNotification } from './notification';


export const getAuctionPayment = query => async dispatch => {
  
  try {
    const res = await axios.get(`/api/listings/checkAuctionEntry`);
    console.log('getting Auction Payments');
    console.log(res);
    dispatch({ type: GET_AUCTIONPAYMENT, payload: res.data });
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
  }
};


export const createAuctionPayment = (
  payment_amount,
  user,
  listing,
  history
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    console.log("HITTING")
    const res = await axios.post('/api/listings/payAuctionEnty', {
      payment_amount,
      user,
      listing
    }, config).then(() => {
      history.push(`/`);
    });
    console.log("----------------------------------------------->PAYMENT<-------------------------------------------")
    console.log(res.data.payment_amount)
    console.log("----------------------------------------------->ID<-------------------------------------------")
    console.log(res.data.listing)
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    dispatch(addNotification(err.response.data.message, 'error'));
  }
};


