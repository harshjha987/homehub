import { User } from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { ApiError } from "../utils/ApiError.js";

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
