import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true

    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : [true,"Password is required"]
    },
    avatar : {
        type : String,
        default : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fprofile-icon-png&psig=AOvVaw1zQM5Dmfzey91XDymtPsMS&ust=1710170350940000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNjk-I7_6YQDFQAAAAAdAAAAABAE"
    },

},{timestamps:true});

export const User = mongoose.model("User",userSchema);