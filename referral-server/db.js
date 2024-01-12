const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log("Database connected")
    }catch(error){
        console.log("Error connecting to database -> ", error.message)
    }
}

module.exports = connectDatabase