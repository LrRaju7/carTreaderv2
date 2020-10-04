const express = require('express');
const router = express.Router();
const auctionPaymentController = require('../../controllers/auctionPaymentController');
const newListingController = require('../../controllers/newListingController');
const authController = require('../../controllers/authController');

// @route    POST api/auction/entryfee
// @desc     Pay Entry Fee on listing
// @access   Private
router.post('/entryfee', authController.authenticate, newListingController.payAuctionEntry);


router.get(
    '/',
    auctionPaymentController.getAllAuctionPayments
  );

module.exports = router;