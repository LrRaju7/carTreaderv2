const VerifiedListing = require('../models/listings/VerifiedListing.js');
const AuctionPayment = require('../models/AuctionPayment.js');
const AppError = require('./../utils/appError');
const md5 = require('md5');
const {verifyBidAmount} = require('.helpers/bidHelpers.js')

exports.checkAuctionEntry = catchAsync(async (req, res, next) => {
    const {listing_id} = req.body
    const user = req.user
    let newId = user.id + listing.id
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
    return res.status(200).json({ verified.listing });
})

