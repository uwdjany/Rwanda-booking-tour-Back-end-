import mongoose from 'mongoose';

//schema of tour

const tourSchema= new mongoose.Schema({
    title:String,
    location:[String],
    picture:String,
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    description:String,
    rate:Number,
    price:String,
    duration:{
        startAt:Date,
        endAt:Date,
    },
       
    names:{
        type:String,
        unique:true,
        required:true
        
    }
},{timestamps:true}
);
tourSchema.pre(/^find/,function(next) {
    this.populate({
        path:"createdBy",
        select:"email phone names picture"
    });
    next();
})

const Tour=mongoose.model('Tour',tourSchema)
export default Tour
