const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title :{
        type:String,
        required : true
    },
    notes:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

const noteModel = mongoose.model('notes',noteSchema)

module.exports = noteModel;