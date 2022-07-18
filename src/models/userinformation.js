import mongoose from "mongoose";


const userInformation = new mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String,
    email:{
        type:String,
    unique:true,
required:true



    },
    phone:String,
    gender:{
        type:String,
        enum:["male","female","other"],
    },
    age:Number

},{timestamps:true}
);

const info = mongoose.model('Register',userInformation);
export default info;