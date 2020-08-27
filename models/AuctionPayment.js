const mongoose = require('mongoose')
const {Schema} = mongoose
const AuctionPaymentSchema = new Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    payment_id: {
        type: String,
        required: true
    },
    payment_amount: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    },
    listing: {
        type: mongoose.Schema.ObjectId,
        ref: 'VerifiedListing',
        required: true
    }
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = AuctionPaymentSchema