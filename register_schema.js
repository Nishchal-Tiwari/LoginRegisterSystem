const mongo = require('mongoose')
module.exports = mongo.model("data", new mongo.Schema({
    id: { type: String, required: true, unique: true, lowercase: true },
    pass: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
    is_verified: { type: Boolean, default: false },
    otp: Number,
    videos: { type: Array }
}))