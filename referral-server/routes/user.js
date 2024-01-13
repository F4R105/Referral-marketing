const { Router } = require('express')
const router = Router()

// MODELS
const Referral = require('../models/referral')
const Order = require('../models/order')

router.get('/referrals', (req, res)=>{
    res.json({response: "View user's referral history"})
})

router.post('/referrals/{id}/purchase', (req, res)=>{
    res.json({response: "Simulate a referred user making a purchase"})
})

router.post('/orders', (req, res) => {
    res.json({response: "Create a new order"})
})

router.get('/orders', (req, res) => {
    res.json({response: "View user's order history"}) 
})

router.post('/orders/{id}/payment', (req, res)=>{
    res.json({response: "Process order payment using Stripe or PayPal"})
})

module.exports = router