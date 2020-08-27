const mongoose = require('mongoose')
const {Schema} = mongoose
const BidSchema = new Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user',
        required: true
    },
    bid: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = BidSchema