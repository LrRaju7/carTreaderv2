const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  location: {
    type: String
  },
  phone: {
    type: Number
  },
  role: {
    type: String,
    enum: ['Bidder', 'Buyer', 'Auctioneer', 'Administrator'],
    default: 'Buyer', 
  },
  privileges: {
    type: [String],
    enum: ['hello','world','aaa'],
    required: function () {
        return this.role === 'Administrator'
      }
  },
  documents: {
    nid: {
      type: String,
      required: function () {
        return this.role === 'Auctioneer' || this.role === 'Bidder'
      }
    },
    trade_license: {
      type: String,
      required: function () {
        return this.role === 'Auctioneer' || this.role === 'Bidder'
      }
    }
  },
  verified: {
    status: {
      type: Boolean,
      default: false,
      required: function () {
        return this.role === 'Auctioneer' || this.role === 'Bidder'
      }
    },
    by: {
      type: mongoose.Schema.ObjectId,      
      required: function () {
        return this.role === 'Auctioneer' || this.role === 'Bidder'
      },      
      ref: 'user'
    }
  }

});

module.exports = User = mongoose.model('user', UserSchema);
