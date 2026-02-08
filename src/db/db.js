const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://project:10Wu4nWYGl0ykSUa@cluster0.rzmyjl1.mongodb.net/Auth')

    console.log('Database connected')
}

module.exports = connectDB;