const AuthModel = require('../models/Auth.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const RegisterUser = async(req,res)=>{
    const{username,email,password}=req.body;
    
    //check user exit or not
    const isUserAlreadyExit = await AuthModel.findOne({
        email
    })

    if(isUserAlreadyExit){
        return res.status(409).json({
            message : 'User Already Exits with thise email..'
        })
    }
    
    //convert password into hash
    const hash =await bcrypt.hash(password , 10);

    const User =await AuthModel.create({
        username,
        email,
        password : hash
    })
    
    //create a token using user_id
    const token = jwt.sign({id : User._id},process.env.JWT_SECRET);
     res.cookie("token", token,{httpOnly : true,secure:false,sameSite:"lax"});

     return res.status(201).json({
            message:'User register succefully',
            username,
            email,

    })

}

const LoginUser = async(req,res)=>{

    const{email,password}=req.body;
    
    //Checking email exites or not
    const User =await AuthModel.findOne({
        email
    })

    if(!User){
        return res.status(400).json({
            message : 'User not exits with thise email',
            email
        })
    }

    //compare password 

    const isMatch =await bcrypt.compare(password,User.password)

    if(!isMatch){
        return res.status(409).json({
            message : 'wrong crediations'
        })
    }  
    else{
        
        const token = jwt.sign({id : User._id},process.env.JWT_SECRET);
        res.cookie("token", token,{httpOnly:true,secure:false,sameSite:"lax"});

        return res.status(201).json({
            message : 'login succefull',
            email
        })
    }
}

const Logout = (req,res)=>{
    res.clearCookie('token');
    return  res.status(201).json({
        message : 'Succefully Logout'
    })
}

module.exports = {RegisterUser, LoginUser,Logout}