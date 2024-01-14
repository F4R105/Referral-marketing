const { Router } = require('express')
const router = Router()

// CONTROLLER
const referralController = require('../controllers/referralController')
const productController = require('../controllers/productController')

router.get('/referrals', referralController.getAllReferrals)

router.post('/referrals', referralController.addNewReferral)

router.put('/referrals', referralController.updateReferral)

router.post('/products', productController.addNewProduct)

module.exports = router