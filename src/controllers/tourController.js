import TourService from "../services/tourService";
import Response from "../utils/response";


class TourController {

    //create Tour
    

    static async createTour(req,res){
        const Tour = await TourService.createTour(req);
    if (!Tour){
        return Response.errorMessage(res, "Failed to Create",  400);
    }

    return Response.successMessage(
        res,
        "Tour Successful Created",
        Tour,
        200

    );
    }

    // get all Tour 

    static async getAll(req, res) {
        const Tour= await TourService.getAll(req);
        if(!Tour){
            return Response.errorMessage(res, "Not Found Tour", 400);
        }
        return Response.successMessage(
            res,
            "Tour Sucessfully to retrived",
            Tour,
            200
        );

    }
    //Update Tour

    static async updateTour(req,res){
        const Tour = await TourService.updateTour(req);
        if(!Tour){
            return Response.errorMessage(res,"Not Found Tour",400);
            
        }
        return Response.successMessage(
            res,
            "Tour Successful to retrieve",
            Tour,
            200
        )
    }


    // getOne  by ID

    static async getOneById(req,res){
        const Tour = await TourService.getOneById(req);
        if(!Tour){
            return Response.errorMessage(res, "Tour not found",400)
        }
        return Response.successMessage(
            res,
            "Tour successful to retrieved",
            Tour,
            200
        )
    }

}

export default TourController