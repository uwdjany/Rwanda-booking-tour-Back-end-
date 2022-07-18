import UserServiceS from "../services/userService";
import handlePassword from "../utils/handlepassword";
import TokenAuth from "../utils/token"

class UserController{

    //login Controller

    static async loginUserController(req,res){
        const user = await UserServiceS.loginUser(req);
        if(!user){
        
            return res.status(400).json({message:"User is not exist"});
        }
        if(handlePassword.checkPassword(user.password,req.body.password)){
            const token=TokenAuth.generateToken({
                phone:user.phone,
                email:user.email,
                picture:user.picture,
                names:user.names,
            })
            return res.status(200).json({message:"logged in succefully",token});
        }else{
            return res 
            .status(400)
            .json({message:"failed oto login ,Password is wrong"})
        }

    }
// register user Api
    static async registerUser(req,res){
        const newUser =await UserServiceS.registerUser(req)

        if(!newUser){
            return ResizeObserver.status(404).json({
                message:"failed to register",
            })
        }

        return res.status(201).json({message:"success",data:newUser});
    }

  

 // Get All user Api


 static async getAll(req,res){
    const newUser =await UserServiceS.getAll(req)

    if(!newUser){
        return ResizeObserver.status(404).json({
            message:"failed to register",
        })
    }

    return res.status(200).json({message:"success",data:newUser});
}


//Delete Use Api

static async deleteUser(req,res){
    const newUser =await UserServiceS.deleteUser(req)

    if(!newUser){
        return ResizeObserver.status(404).json({
            message:"failed to register",
        })
    }

    return res.status(201).json({message:"success",data:newUser});
}


//Update user Api


static async updatedUser(req,res){
    const newUser =await UserServiceS.deleteUser(req)

    if(!newUser){
        return ResizeObserver.status(404).json({
            message:"failed to register",
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