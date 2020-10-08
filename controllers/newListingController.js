const UnverifiedListing = require('../models/listings/UnverifiedListing.js');
const VerifiedListing = require('../models/listings/VerifiedListing.js');
const ExpiredListing = require('../models/listings/VerifiedListing.js');
const AuctionPayment = require('./../models/AuctionPayment.js');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const md5 = require('md5');
const {verifyBidAmountAndSave} = require('./helpers/bidHelpers.js')

exports.createUnverifiedListing = catchAsync(async (req, res, next) => {
  const listingBody = {
    ...req.body,
    createdBy: req.user.id,
    startPrice: req.body.startPrice,
    minIncrement: req.body.minIncrement
  };
  console.log(listingBody);
  if (
    listingBody.minIncrement % 1 !== 0 &&
    !!listingBody.minIncrement &&
    listingBody.startPrice % 1 !== 0 &&
    !!listingBody.startPrice
  ) {
    return next(
      new AppError(
        'Money fields are required and must only have two decimal places',
        400
      )
    );
  }
  console.log(listingBody.endDateTime)
  console.log(listingBody.title)
  console.log(listingBody.description)
  if (!(listingBody.endDateTime && listingBody.title && listingBody.description)) {
    return next(new AppError('Missing required fields', 400));
  }
  const newListing = await UnverifiedListing.create(listingBody);
  res.status(201).json({ listing: newListing });
});


exports.getAllUnverifiedListingsByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const listings = await UnverifiedListing.find({created_by: user.id});
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    });       
})

exports.getUnverifiedListingByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const {listing_id} = req.body
    const listing = await UnverifiedListing.findOne({_id: listing_id, created_by: user.id});
    res.status(200).json({
        status: 'success',
        data: {
            listing
        }
    });  
})

exports.editUnverifiedListingByUser = catchAsync(async (req, res, next) => {

})

exports.deleteUnverifiedListingByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const { listing_id } = req.body
    const listing = await UnverifiedListing.findOne({ _id: listing_id, created_by: user.id });

    if (listing) {
        await listing.remove();
        return res.status(200).json({
            status: 'success',
            data: {
                listing
            }
        });
    } else {
        return next(new AppError('No Listing Found', 404));
    }
})

exports.getAllVerifiedListings = catchAsync(async (req, res, next) => {
    // console.log("GETTING ALL VERIFIED LISTINGS")
    const listings = await VerifiedListing.find({});
    // console.log(listings)
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    });    
})

exports.getAllVerifiedListingsByUser = catchAsync(async (req, res, next) => {
    console.log("GETTING ALL VERIFIED LISTINGS BY USER")
    const user = req.user['id']
    console.log(user)
    const listings = await VerifiedListing.find({createdBy: user});
    console.log(listings)
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    }); 
})

exports.getVerifiedListingByUser = catchAsync(async (req, res, next) => {
    const user = req.user['id']
    const {listing_id} = req.body
    const listing = await VerifiedListing.findOne({_id: listing_id, createdBy: user});
    res.status(200).json({
        status: 'success',
        data: {
            listing
        }
    }); 
})

// exports.getVerifiedListingById = catchAsync(async (req, res, next) => {
//     const {listing_id} = req.body
//     const listing = await VerifiedListing.findOne({_id: listing_id});
//     console.log("---------GET LISTING BY ID---------")
//     console.log(listing)
//     console.log("---------GET LISTING BY ID---------")
//     res.status(200).json({
//         status: 'success',
//         data: {
//             listing
//         }
//     }); 
// })

exports.endExpiredListing = catchAsync(async (req, res, next) => {
    
})

exports.getAllExpiredListings = catchAsync(async (req, res, next) => {
    const listings = await ExpiredListing.find({});
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    });  
})

exports.getAllExpiredListingsByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const listings = await ExpiredListing.find({created_by: user.id});
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    }); 
})

exports.getExpiredListingByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const {listing_id} = req.body
    const listing = await ExpiredListing.findOne({_id: listing_id, created_by: user.id});
    res.status(200).json({
        status: 'success',
        data: {
            listing
        }
    }); 
})



exports.checkAuctionEntry = catchAsync(async (req, res, next) => {

    const listing_id = req.body.listing_id
    // console.log("---------LISTING ID---------")
    // console.log(listing_id)
    // console.log("---------LISTING ID---------")
    const user = req.body.user_id
    // console.log("---------USER ID---------")
    // console.log(user)
    // console.log("---------USER ID---------")
    let newId = user + listing_id
    let hash = md5(newId);
    console.log("---------HASH---------")
    console.log(hash) 
    console.log("---------HASH---------") 

    const auctionPayment = await AuctionPayment.find({user: user , listing: listing_id}) 

    console.log("---------AUCTION PAYMENT---------")
    console.log(auctionPayment)
    console.log("---------AUCTION PAYMENT---------")

    if (next){
        if (auctionPayment) {
            console.log("---------RESPONSE---------")
    console.log(res.json.auctionEntryPaid)
    console.log("---------RESPONSE---------")
            next()
        }else{
            return next(new AppError('You have not paid the entry fee for the auction. Please pay entry fee to bid.', 401));  
        }  
    } else {
        return res.status(200).json({auctionEntryPaid: false})
    }
})

exports.payAuctionEntry = catchAsync(async (req, res, next) => {
    // const {listing_id} = req.body
    // const user = req.user
    // REDIRECT TO ... TO PAY

    const auctionPaymentBody = {
        ...req.body,
        payment_amount: req.body.payment_amount,
        user: req.body.user ,
        listing: req.body.listing ,
    }

    const listing = await VerifiedListing.findById(auctionPaymentBody.listing)
    if (listing){
        try {
            let newId = auctionPaymentBody.user + auctionPaymentBody.listing
            let hash = md5(newId);
            let newAuctionPayment = new AuctionPayment({_id: hash, user: auctionPaymentBody.user, payment_id: "ABCDEFGHIJ", payment_amount: 100, listing: auctionPaymentBody.listing})
            await newAuctionPayment.save()
        } catch (err){
            console.log(err)
        }
    }
    
})


// user,
//     bid,
//     listingID,
//     endDateTime,

exports.createBid = catchAsync(async (req, res, next) => {
    const listing_id = req.body.listingID
    const user = req.body.user
    console.log("-----------------------HITTING_________________")
    console.log("-----------------------REQ BODY FROM CONTROLLER-------------------")
    console.log(req.body)
    console.log("-----------------------HITTING_________________")
    let bid = req.body.bid
    const endDateTime = req.body.endDateTime
    const verified = await verifyBidAmountAndSave(listing_id, bid, user, endDateTime)
    if (verified.isError && verified.errType) return next(new AppError(verified.errType, 404));
    let {listing} = verified
    return res.status(200).json({ listing });
})
