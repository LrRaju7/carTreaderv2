const express = require('express');
const router = express.Router();
const auctionPaymentController = require('../../controllers/auctionPaymentController');
const authController = require('../../controllers/authController');

// @route    POST api/auction/entryfee
// @desc     Pay Entry Fee on listing
// @access   Private
router.post('/entryfee', authController.authenticate, auctionPaymentController.createAuctionPayment);

module.exports = router;