const { Router } = require('express')
const router = Router()
const User = require('../models/user')

router.post('/login', (req, res)=>{
    res.json({response: "login"})
})

router.post('/register', async (req, res)=>{
    try {
        const user = new User(req.body)
        const newUser = await user.save()
        res.json(newUser)
    }catch(error){
        console.log("error registering a user -> ", error.message)
        res.status(500).json({message: error.message})
    }
})

router.post('/logout', (req, res)=>{
    res.json({response: "logout"})
})

module.exports = router