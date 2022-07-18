// import express from "express";
// // import Validator from "../middlewares/Validator";
// import SignUpController from "../controllers/signupController";
// // import Datachecker from "../middlewares/Datachecker";

// const userRouter = express.Router();

// // userRouter.post("/signup",
// // Validator.newAccountRules(),
// // validator.validateInput,
// // Datachecker.validateEmailDuplication,
// // Datachecker.checkAge,
// // SignUpController.createAccount);

// userRouter.get("/all", SignUpController.getAll);
// userRouter.get("/id:",Validator.checkId(),Validator.validateInput, SignUpController.getOneById);
// userRouter.patch("/id:",Validator.checkId(),Validator.validateInput, SignUpController.updateUser);
// //userRouter.delete("/id:",Validator.checkId(),Validator.validateInput, SignUpController)
// //userRouter.post("/signin", SignUpController.signupUser);

// export default userRouter