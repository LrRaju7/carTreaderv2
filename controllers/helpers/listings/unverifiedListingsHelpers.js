exports.checkIfApprovalUrl = async (referrer) => {
    if (referrer.includes('approve')) return true
}

exports.approveUnverifiedListing = async (context, record) => {
    const VerifiedListing = context.findResource('VerifiedListing')
    
}