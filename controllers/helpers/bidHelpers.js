const VerifiedListing = require('../../models/listings/VerifiedListing.js');


exports.verifyBidAmountAndSave = async (listing_id, bid, user) => {
    const listing = await VerifiedListing.findById(listing_id)


    console.log("-----------------------HITTING_________________")
    console.log("-----------------------LISTING-------------------")
    console.log(listing_id)
    console.log(user)
    console.log("-----------------------HITTING_________________")
    

    const currDateTime = Date.now()
    let errRes = {isError: true}
    if (!listing) errRes.errType = 'There is no listing by this ID'
    if (listing.endDateTime < currDateTime) errRes.errType = 'The listing has expired'
    let bidVar = listing.minIncrement + listing.highest_bid.amount

    console.log("-----------------------HITTING_________________")
    console.log("-----------------------BID CHECK AMOUNT-------------------")
    console.log(bidVar)
    console.log("-----------------------BID CHECK AMOUNT_________________")

    if ((bid > listing.highest_bid.amount) && (bid >= bidVar)){
        try {
            listing.bids.push({user: user, bid: bid});
            listing.highest_bid = {amount: bid, user: user.id}
            console.log("-----------------------HITTING_________________")
    console.log("-----------------------BID SAVING-------------------")
    console.log(listing.bids)
    console.log(listing.highest_bid)
    console.log("-----------------------BID SAVING_________________")
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

