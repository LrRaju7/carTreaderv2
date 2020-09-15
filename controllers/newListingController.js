const UnverifiedListing = require('../models/listings/UnverifiedListing.js');
const VerifiedListing = require('../models/listings/VerifiedListing.js');
const ExpiredListing = require('../models/listings/VerifiedListing.js');
const AuctionPayment = require('./../models/AuctionPayment.js');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const md5 = require('md5');
const {verifyBidAmount} = require('./helpers/bidHelpers.js')

exports.createUnverifiedListing = catchAsync(async (req, res, next) => {
  const listingBody = {
    ...req.body,
    createdBy: req.user.id,
    startPrice: req.body.startPrice,
    minIncrement: req.body.minIncrement
  };
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
    const listings = VerifiedListing.find({});
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    });    
})

exports.getAllVerifiedListingsByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const listings = await VerifiedListing.find({created_by: user.id});
    res.status(200).json({
        status: 'success',
        listings: listings.length,
        data: {
            listings
        }
    }); 
})

exports.getVerifiedListingByUser = catchAsync(async (req, res, next) => {
    const user = req.user
    const {listing_id} = req.body
    const listing = await VerifiedListing.findOne({_id: listing_id, created_by: user.id});
    res.status(200).json({
        status: 'success',
        data: {
            listing
        }
    }); 
})

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
    const {listing_id} = req.body
    const user = req.user
    let newId = user.id + listing_id
    let hash = md5(newId);    
    const auctionPayment = await AuctionPayment.findById(hash)
    if (next){
        if (auctionPayment) next()
        return next(new AppError('You have not paid the entry fee for the auction. Please pay entry fee to bid.', 401));    
    } else {
        return res.status(200).json({auctionEntryPaid: false})
    }
})

exports.payAuctionEntry = catchAsync(async (req, res, next) => {
    const {listing_id} = req.body
    const user = req.user
    // REDIRECT TO ... TO PAY
    const listing = await VerifiedListing.findById(listing_id)
    if (listing){
        try {
            let newId = user.id + listing.id
            let hash = md5(newId);
            let newAuctionPayment = new AuctionPayment({_id: hash, user: user.id, payment_id: "ABCDEFGHIJ", payment_amount: 100, listing: listing._id})
            await newAuctionPayment.save()
        } catch (err){
            console.log(err)
        }
    }
    
})

exports.createBid = catchAsync(async (req, res, next) => {
    const { listing_id, bid } = req.body
    const user = req.user
    const verified = await verifyBidAmount(listing_id, bid, user)
    if (verified.isError && verified.errType) return next(new AppError(verified.errType, 404));
    let {listing} = verified
    return res.status(200).json({ listing });
})
