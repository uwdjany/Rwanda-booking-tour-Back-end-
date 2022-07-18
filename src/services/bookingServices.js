import BookingTour from '../models/booking';


class BookingService{

    //create booking

    static async createBooking(req){
        const Booking = await BookingTour.create(req.body)
        return Booking
    }

    //Get All booking

    static async getAll(req){
        const Booking = await BookingTour.find()
        return Booking;
    }


    // Update booking

    static async updateBooking(req){

        await BookingTour.findOneAndUpdate({_id:req.params.id},req.body)
        const Booking = BookingTour.findOne({_id:req.params.id})
        return Booking;
    }


    // get one by id

    static async getOneById(req){
        const Booking = await BookingTour.findById({_id:req.params.id},req.body)
        return Booking
    }
}


export default BookingService