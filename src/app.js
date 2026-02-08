const express = require('express')
const userModel = require('./models/auth.model')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')

const  app = express()
app.use(express.json())
app.use(cookieparser())

app.post('/register',async (req,res)=>{
    
    const{email,password}=req.body;

    const isUserAlreadyRegister = await userModel.findOne({
        email
    })

    if(!isUserAlreadyRegister){
        return res.status(409).json({
            message:"use already register"
        })
    }
    
    const data = await userModel.create({
        email,password
    })

    const token = jwt.sign({
      id : data._id
    },'3bcd6bad70b1568b4d4c9ca78a5150d9')

    res.cookie('token',token)

    res.status(201).json({
        message :'Registration succefully done',
        email,
        password,
        token
    })
})

module.exports = app;