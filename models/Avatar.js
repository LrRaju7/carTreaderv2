const mongoose = require('mongoose')
const {Schema} = mongoose
const AvatarSchema = new Schema({
    avatar: {
        type: String
    },
    _id: {
        type: String
    },
    active: {
        type: Boolean,
        default: false
    }
})

module.exports = AvatarSchema