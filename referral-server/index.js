require('dotenv').config()
const express = require('express')
const app = express()

const connectDatabase = require('./db')
connectDatabase()

// ROUTES
const referralRoutes = require('./routes/referrals')

app.use('/api/referrals', referralRoutes)

const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))