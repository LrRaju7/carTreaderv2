const AuctionPayment = require('../models/AuctionPayment');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.createAuctionPayment = catchAsync(async (req, res, next) => {
    const auctionPaymentBody = {
        ...req.body,
        payment_amount: req.body.payment_amount,
        user: req.body.user ,
        listing: req.body.listing ,
    }
    if (
      !auctionPaymentBody.payment_amount
    ) {
      return next(
        new AppError(
          'Money fields are required and must only have two decimal places',
          400
        )
      );
    }
    // if (!(auctionPaymentBody.cvv || auctionPaymentBody.expire || auctionPaymentBody.ccnum)) {
    //   return next(new AppError('Missing required fields', 400));
    // }
    const newAuctionPayment = await AuctionPayment.create(auctionPaymentBody);
    console.log("/------------------------newAuctionPayment------------------------/")
    console.log(newAuctionPayment)
    console.log("/------------------------newAuctionPayment------------------------/")
    res.status(201).json({ auctionPayment: newAuctionPayment });
  });



