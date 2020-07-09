const mongoose = require('mongoose');

const AuctioneerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    data: Buffer, 
    contentType: String,
  },
  phone: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: number,
  },
  trade_license: {
    data: Buffer, 
    contentType: String,
    required: true,
  },
  role: {
    type: String,
    default: Auctioneer, 
  },
  verified: {
    type: Bool,
    default: false, 
  },
  verified_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user' 
  },
});

module.exports = Auctioneer = mongoose.model('auctioneer', AuctioneerSchema);
