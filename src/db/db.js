const mongoose = require('mongoose')


async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGOOSE_KEY)
        console.log('Database connected..');
    }catch(err){
        console.log('Error occure to connect....',err);
    }
}

module.exports = connectDB;