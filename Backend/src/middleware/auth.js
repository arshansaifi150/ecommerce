import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

function isAuth(req,res,next){
    const authHeader = req.get("Authorization")
    if (!authHeader) {
        res.isAuth = false;
        return next()
    }
    const token = authHeader.split(" ")[1]
    if(!token ||  token === ""){
        res.isAuth = false;
        return next()
    }
    try {
        const decoded = jwt.verify(token,process.env.TOKEN_KEY);
        req.user = decoded;
        res.isAuth = true;
         next()
    } catch (error) {
        res.isAuth = false;
        next()
        
    }

}

export default isAuth