const { Router } = require('express')
const router = Router()

router.get('/', (req, res)=>{
    res.json({name: "hellow world"})
})

module.exports = router