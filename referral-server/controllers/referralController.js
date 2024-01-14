const Referral = require('../models/referral')

const getAllReferrals = async (req, res) => {
    try {
        const referrals = await Referral.find()
        res.status(200).json({response: referrals})
    }catch(error){
        console.log('error getting all referrals -> ', error.message)
        res.status(500).json({message: error.message})
    }
}

const addNewReferral = async () => {
    try {
        const newReferral = new Referral()
        const addedReferral = await newReferral.save()
        return addedReferral
    }catch(error){
        console.log('error adding new referral -> ', error.message)
        res.status(500).json({message: error.message})
    }
}

const updateReferral = async () => {
    try {
        const referrals = await Referral.find()
        return referrals
    }catch(error){
        console.log('error getting all referrals -> ', error.message)
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllReferrals,
    addNewReferral,
    updateReferral
}