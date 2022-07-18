import BookingServices from "../services/bookingServices";
import Response from "../utils/response";

class BookingController{



    //created booking Controller


    static async createBooking(req,res){
        const Booking = await BookingServices.createBooking(req);
        if (!Booking){
            return Response.errorMessage(res, "Failed Created" , 400)
        }
        return Response.successMessage(
            res,
            "Booking Successful Created",
            Booking,
            200
        );
    }

// get All booking Controller



    static async getAll(req, res){
        const Booking = await BookingServices.getAll(req);
        if (!Booking){
            return Response.errorMessage(res, "Not found Booking" , 400);
        }
        return Response.successMessage(
            res,
            "Booking Successful to retrieved",
            Booking,
            200
        );

    }

    //update booking controller

    static async updateBooking(req, res){
        const Booking = await BookingServices.UpdateBooking(req);
        if(!Booking){
            return Response.errorMessage(res, "Not found Booking" , 400);

        }
        return Response.successMessage(
            res,
            "Booking Successful to retrieve",
            Booking,
            200
        );
    }

    //get one by id

static async getOneById(req,res){
    const Booking = await BookingServices.getOneById(req);
    if(!Booking){
        return Response.errorMessage(res, "Not found Booking" , 400)
    }
    return Response.successMessage(
        res,
        "Booking Successful to retrieve",
        Booking,
        200
    );
}
 

}

export default BookingController