const mongoose = require('mongoose')

const referralSchema = new mongoose.Schema({
    referrer_user_id: {},
    referred_user_id: {},
    // status: (pending, completed, expired, etc.),
    reward_type: {},
    reward_value: {},
    expiration_date: {}
})

const referralModel = mongoose.model("referral", referralSchema)
module.exports = referralModel