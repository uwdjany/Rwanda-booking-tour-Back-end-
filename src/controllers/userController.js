import UserServiceS from "../services/userService";

class UserController{
// register user
    static async registerUser(req,res){
        const newUser =await UserServiceS.registerUser(req)

        if(!newUser){
            return ResizeObserver.status(404).json({
                message:"failesd to register",
            })
        }

        return res.status(201).json({message:"success",data:newUser});
    }


static testController(req,res){


    const test =UserServiceS.testServiceFunction(req);
    return res.status(200).json(
        {
            message:"Ok! Successfully",
            data : test
        }
    )
    
}


}
export default UserController;