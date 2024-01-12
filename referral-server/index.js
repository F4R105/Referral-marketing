require('dotenv').config()
const express = require('express')
const app = express()

// DATABASE
const connectDatabase = require('./db')
connectDatabase()

// ROUTES
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

app.use('/', authRoutes)
app.use('/api/products', (req, res) => {
    res.json({
        response: "View all products"
    })
} )
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)

// SERVER
const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))