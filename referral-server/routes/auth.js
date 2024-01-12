const { Router } = require('express')
const router = Router()

router.post('/login', (req, res)=>{
    res.json({response: "login"})
})

router.post('/register', (req, res)=>{
    res.json({response: "register"})
})

router.post('/logout', (req, res)=>{
    res.json({response: "logout"})
})

module.exports = router