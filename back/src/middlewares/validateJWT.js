const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

const validateJWT = async (req, res, next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '');

        if (!token){
            return res.status(400).json({
                ok: false,
                msg: 'Error: Missing token'
            }) 
        }

        const user = await User.findOne({ token: token });
/*         console.log("token : " + token);
        console.log(user); */
        if (!user){
            return res.status(400).json({
                ok: false,
                msg: 'Error: Authentication failed'
            }) 
        }
        //Save token and user in the request to send to next middleware
        /* console.log("auth todo bien") */
        req.token = token;
        req.user = user; 
        next();

    }catch(e){
        res.status(400).json(e);
    }
}

module.exports = validateJWT;  