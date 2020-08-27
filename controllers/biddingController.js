const VerifiedListing = require('../models/listings/VerifiedListing.js');
const AppError = require('./../utils/appError');
const {verifyBidAmount} = require('.helpers/bidHelpers.js')

exports.createBid = catchAsync(async (req, res, next) => {
    const { listing_id, bid } = req.body
    const verified = await verifyBidAmount(listing_id, bid)
    if (verified.isError && verified.errType) return next(new AppError(verified.errType, 404));
    return res.status(200).json({ verified.listing });
}