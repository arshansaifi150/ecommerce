import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

dotenv.config()

const jwtSecret = process.env.TOKEN_KEY;

export const createSecretToken =(id)=> {
    return jwt.sign({id},jwtSecret,{
        expiresIn: '3d' //3dasys
    })
}

export const  verifyToken = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "Unauthorized",
            error: "No token provided",
            status:false


        })
    }
    try {
        const decoded = jwt.verify('token',jwtSecret);
        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(403).json({
              status: false,
              message: "Forbidden: User not found."
            });
          }
          req.user = {
            id: user._id,
            username: user.username,
            email: user.email,
            password:user.password
            
          };
      
          next();
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Unauthorized: Invalid or expired token."
          });
    }
}
