const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    password :{
        type:String,
        required : true
    }
})

const AuthModel = mongoose.model('authetication',AuthSchema);

module.exports = AuthModel;
