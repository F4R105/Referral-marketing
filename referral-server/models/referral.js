const mongoose = require('mongoose')

const referralSchema = new mongoose.Schema({
    referrer_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    referred_user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        enum: [pending, completed, expired],
        required: true,
        default: "pending"
    },
    reward_type: {
        type: String,
        default: "default"
    },
    reward_value: {
        type: Number,
    },
    expiration_date: {
        type: Date
    }
})

const referralModel = mongoose.model("Referral", referralSchema)
module.exports = referralModel