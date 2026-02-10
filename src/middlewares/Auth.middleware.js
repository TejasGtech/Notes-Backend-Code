const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{

    const token = req.cookies.token;

    if(!token){
        return res.status(409).json({
            message : 'unathorize'
        })
    }

    const decoded = await jwt.verify(token,process.env.JWT_SECREAT)
    
    if(!decoded){
        return res.status(401).json({
            message : "Token not correct"
        })
    }
    
    req.user = decoded;

    next();
}

module.exports = {authMiddleware}

