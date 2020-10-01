import axios from 'axios';
import { addNotification } from './notification';

// export const createAuctionPayment = (

//     payment_amount,
//     // user,
//     // listing
    
//   ) => async dispatch => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
  
//     const body = {
//         payment_amount,
//         // user,
//         // listing
//     };
//     console.log("---------------------->Auction_Payment<---------------------")
//     console.log(body);
//     try {
//       const res = await axios.post('api/listings/entryfee', body, config).then(() => {
//         console.log("success")
//       });
//       console.log(res)
//     } catch (err) {
//       console.log(`Error: ${err}`);
//       dispatch(addNotification(err.response.data.message, 'error'));
//     }
//   };

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
        const res = await axios.post('/api/auction/entryfee', {
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