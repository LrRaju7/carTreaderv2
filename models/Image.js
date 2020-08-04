const mongoose = require('mongoose')
const {Schema} = mongoose
const ImageSchema = new Schema({
    image: {
        type: String
    },
    _id: {
        type: String
    },
    highlighted: {
        type: Boolean,
        default: false
    }
})

module.exports = ImageSchema