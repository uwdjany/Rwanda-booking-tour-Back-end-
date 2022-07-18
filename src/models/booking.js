import mongoose, { Schema } from 'mongoose';

//schema of booking

const bookingSchema = new mongoose.Schema({
    bookedBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    tourId:{
        type:mongoose.Schema.ObjectId,
        ref:"Tour"
    },
    paidAmount:String,
    status:{
        type:String,
        enum:["pending","accept","cancel"],
        default:"pending",
    },

},{timestamps:true}
);

bookingSchema.pre(/^find/,function(next){
    this.populate({
        path:"bookedBy",
        select:"email phone names picture"
    });
    this.populate({
        path:"tourId",
        select:"names title duration location  picture price"

    });
    next();
    

})

const bookingTour=mongoose.model('booking',bookingSchema);


export default bookingTour;