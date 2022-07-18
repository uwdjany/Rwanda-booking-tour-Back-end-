// import UserModel from userinfomation;

// class SignUpServices{

//     //Create Account 
//     static async createAccount(req){
//         const Signup = await UserModel.create(req.body)
//         return Signup
//     }
//     // get all user

// static async getAll(req){
//    const Signup = await UserModel.find()
//     return Signup
// }

// //get one by id

// static async getOneById(req){
//     const Signup = await UserModel.findById({_id:req.params.id},req.body);

//     return Signup;

//     //update


// }

// static async updateUser(req){
//     await UserModel.findOneAndUpdate({_id:req.params.id},req.body);

//     const Signup = UserModel.findOne({_id:req.params.id}); 

//     return Signup;

// }

// }
// export default SignUpServices