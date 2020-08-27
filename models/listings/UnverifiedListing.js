const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const Car = require("../Car");
const Image = require("../Image");


const shortid = require("shortid");
mongoose.plugin(slug);

const UnverifiedListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "An item must have a title!"],
        trim: true,
        maxlength: [30, "A title must be less than 30 characters!"],
    },
    slug: {
        type: String,
        default: shortid.generate,
        unique: true,
    },
    description: {
        type: String,
        required: [true, "An item must have a description!"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    car: {
        type: Car,
        required: true,
    },
    images: {
        type: [Image],
        required: true
    },
    currentPrice: {
        type: Number
    },
    startPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    minIncrement: {
        type: Number,
        required: true,
        min: [2000, "Cannot be less than BDT2000"],
        default: 2000,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },
    endDateTime: {
        type: Date,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    },
});

//sets the current price to the starting price
UnverifiedListingSchema.pre("save", function(next) {
    if (!this.currentPrice) {
        this.currentPrice = this.startPrice;
    }
    next();
});

const UnverifiedListing = mongoose.model(
    "UnverifiedListing",
    UnverifiedListingSchema
);

module.exports = UnverifiedListing;