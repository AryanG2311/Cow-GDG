import jwt from "jsonwebtoken";
import { Owner } from "./model/owner.model.js";

export const verifyUser = async (req,_,next) => {
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ","");
    
        if(!token){
            throw new ApiError(401,"Unauthorized access");
        }
    
        const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET);
    
        const user = await Owner.findById(decodedToken?._id).select("-password -refreshToken");
    
        if(!user){
            throw new ApiError(401,"Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Access Token");
    }
}