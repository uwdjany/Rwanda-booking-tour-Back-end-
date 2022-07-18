import UserModel from "../models/user"
import handlePassword from "../utils/handlepassword";

class UserServiceS{

      //login 

      static async loginUser(req){
        const user = await UserModel.findOne({email:req.body.email});
        return user;

    }

    //registering user

    static async registerUser(req){
      
        req.body.password = handlePassword.encryptPassword(req.body.password)
        const user = await UserModel.create(req.body) 
        return user;

    }

  // get All user

  static async getAll(req){
    const user = await UserModel.find(req.body) 
    return user;
}
// Delete User

static async deleteUser(req){
    const user = await UserModel.deleteOne({_id:req.params.id});
    return user;

}


//Update User

static async updateUser(req){
    await UserModel.findOneAndUpdate({_id:req.params.id},req.body);

    const user = UserModel.findOne({_id:req.params.id}); 

    return user;

}


static testServiceFunction(req){

    req.body.names=req.body.names.toUpperCase();

    const {num1,num2} = req.body;
const sum = num1 + num2;
req.body.sum=sum;
return req.body

}


}
export default UserServiceS