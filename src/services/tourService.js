import TourModel from "../models/tour"

class TourService{

//create Tour

static async createTour(req){

   const Tour = await TourModel.create(req.body)
    return Tour
}
// Get All Tour

static async getAll(req){
   const Tour = await TourModel.find()
    return Tour
}

//get one by id
static async getOneById(req){
    const Tour = await TourModel.findById({_id:req.params.id},req.body);

    return Tour;
}

// update Tour

// static async UpdateTour(req){
//     await TourModel.findOneAndUpdate({_id:req.params.id},req.body);
//     const tour = TourModel.findOne({_id:req.params.id})
//     return tour;
// }

static async updateTour(req){
    await TourModel.findOneAndUpdate({_id:req.params.id},req.body);

    const Tour = TourModel.findOne({_id:req.params.id}); 

    return Tour;

}


}

export default TourService