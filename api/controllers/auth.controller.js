import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";

export const signup = async (req,res,next)=>{

    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    if( !username || !email || !password ) 
    return res.status(400).
    send("Name and email are required")

    const newUser = new User({username,email,password:hashedPassword})
    try {
        await newUser.save();
        res.status(201).json("User created succesfully");
    } catch (error) {
        next(error);
        
    }
    


};
export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !username){
        throw new ApiError(404,"Email and Password is required");
    }
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            throw new ApiError(400,"Invalid Credentials")
        }

        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword){
            throw new ApiError(404,"Wrong Password");
        }

        const token = jwt.sign(
            {
              id : validUser._id
            },
            process.env.JWT_SECRET_KEY,
            
        )

        const {password: pass,...rest} = validUser._doc;
        res.cookie('access_token',token,{httpOnly : true}).status(200).json(rest)


        
    } catch (error) {
        next(error);
    }
}
