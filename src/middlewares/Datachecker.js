import UserModel from "../models/user";

class Datachecker{
    static validateEmailDuplication = async (req, res, next) =>{
        const email = await UserModel.findOne({ email: req.body.email});

        
        if (!email){
            return next();
        }
        return res.status(404).json({
            status:404,
            message:"Email already exist"
        })
    }
    static checkAge=(req ,res, next) =>{
        if(req.body.age < 18){
            return res.status(404).json({
                status:404,
                message:"You are under age. no Access"
            })
        }
      

    }
}

export default Datachecker;