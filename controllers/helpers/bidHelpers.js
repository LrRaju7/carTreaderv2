const VerifiedListing = require('../../models/listings/VerifiedListing.js');


exports.verifyBidAmountAndSave = (listing_id, bid, user) => {
    const listing = await VerifiedListing.findById(listing_id)
    const currDateTime = Date.now()
    let errRes = {issError: true}
    if (!listing) errRes.errType = 'There is no listing by this ID'
    if (listing.endDateTime < currDateTime) errRes.errType = 'The listing has expired'
    if ((bid > listing.highest_bid.amount) && (bid >= (listing.minIncrement+listing.highest_bid).amount)){
        try {
            listing.bids.push({user: user.id, bid: bid});
            listing.highest_bid = {amount: bid, user: user.id}
            await listing.save()
            return {
                listing
            }
        } catch(err){
            errRes.err = err
        }
    } else {
      errRes.errType = 'Bid amount is less than the minimum increment'
    }
    return errRes
}

