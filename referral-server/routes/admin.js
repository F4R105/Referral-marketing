const { Router } = require('express')
const router = Router()

router.get('/referrals', (req, res)=>{
    res.json({response: "view all referrals"})
})

router.post('/referrals', (req, res)=>{
    res.json({response: "add new referral"})
})

router.put('/referrals', (req, res) => {
    res.json({response: "update referral"})
})

router.post('/products', (req, res) => {
    res.json({response: "add new product"}) 
})

module.exports = router