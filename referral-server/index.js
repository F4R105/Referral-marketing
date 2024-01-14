require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// MIDDLEWARES
app.use(express.json())
app.use(cors())

// DATABASE
const connectDatabase = require('./db')
connectDatabase()

// ROUTES
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const Product = require('./models/product')

app.use('/', authRoutes)
app.use('/api/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    }catch(error){
        console.log("error fetching products -> ", error.message)
        res.status(500).json({message: error.message})
    }
} )
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)

// SERVER
const PORT = 3000 || process.env.PORT
app.listen(PORT, ()=>console.log(`Server is listening on port ${PORT}`))