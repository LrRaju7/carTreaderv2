const UnverifiedListing = require('../../../models/listings/UnverifiedListing.js');
const VerifiedListing = require('../../../models/listings/VerifiedListing.js');

exports.checkIfApprovalUrl = async (referrer) => {
    if (referrer.includes('approve')) return true
}

exports.approveUnverifiedListing = async (context) => {
    console.log(">>>>>>>>>>================= Approving Unverified Listing =================<<<<<<<<<<")
    const { record, _admin, currentAdmin, resource } = context
    let payload = await UnverifiedListing.findById(record.param('_id')).lean()
    payload['__v'] = undefined
    delete payload['createdAt']
    delete payload['_id']    
    try {
        //################################################################
        //##### NEED TO ADD CURRENT ADMIN DETAILS TO VERIFIED LISTING
        // add field verified_by: admin_id
        //################################################################
        console.log(payload)
        let verifiedListing = new VerifiedListing(payload)
        console.log(verifiedListing)
        await verifiedListing.save()
        console.log("HIT")
        context.record = verifiedListing
        console.log("+-+-+-+-+-+-+-+-+-+-+ Verified Listing Created +-+-+-+-+-+-+-+-+-+-+")
        console.log("+-+-+-+-+-+-+-+-+-+-+ Deleting Unverified Listing +-+-+-+-+-+-+-+-+-+-+")
        let result = await UnverifiedListing.findByIdAndRemove(record.param('_id'))
        console.log("+-+-+-+-+-+-+-+-+-+-+ Unverified Listing Deleted +-+-+-+-+-+-+-+-+-+-+")
        return verifiedListing;
    } catch (err) {
        console.log(err)
        return {
            isError: true,
            record: record.toJSON(currentAdmin),
            notice: {
                message: error.baseError.message,
                type: 'error',
            },
        }
    }   
}