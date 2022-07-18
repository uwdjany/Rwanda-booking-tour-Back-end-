// import SignupServices from '../services/signupService';
// import Response from '../utils/response';



// class SignUpController{
// static async createAccount(req,res){
//     const Signup = await SignupServices.createAccount(req);
// if (!Signup){
//     return Response.errorMessage(res, "Failed to Create",  400);
// }

// return Response.successMessage(
//     res,
//     "Account Successful Created",
//     Signup,
//     200

// );
// }


// static async getAll(req, res) {
//     const Signup= await SignupServices.getAll(req);
//     if(!Signup){
//         return Response.errorMessage(res, "Not Found Tour", 400);
//     }
//     return Response.successMessage(
//         res,
//         "Account Sucessfully to retrived",
//        Signup,
//         200
//     );

// }
// //update controller

// static async getOneById(req,res){
//     const Signup = await TourService.getOneById(req);
//     if(!Signup){
//         return Response.errorMessage(res, "Account not found",400)
//     }
//     return Response.successMessage(
//         res,
//         "Account successful to retrieved",
//         Signup,
//         200
//     )
// }

// static async updateUser(req,res){
//     const Signup = await SignupServices.updateUser(req);
//     if(!Signup){
//         return Response.errorMessage(res,"Not Found Account",400);
        
//     }
//     return Response.successMessage(
//         res,
//         "Account Successful to retrieve",
//         Signup,
//         200
//     )
// }




// }

// export default SignUpController