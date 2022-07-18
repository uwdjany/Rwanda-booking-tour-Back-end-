import { Router } from "express";
import TourController from "../controllers/tourController";
import UserController from "../controllers/userController";
import BookingController from "../controllers/bookingController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/Datachecker";
import VerifyToken from "../middlewares/verifyToken";

const route =Router();

route.post("/user/test",UserController.testController);
route.post("/user/login" ,VerifyToken
,UserController.loginUserController);
route.post("/user/create", Validator.newAccountRules(),
Validator.validateInput,
DataChecker.validateEmailDuplication,
UserController.registerUser,);
route.get("/user",UserController.getAll);
route.delete("/user/:id",UserController.deleteUser);
route.patch("/user/:id",UserController.updatedUser);
route.post("/tour/create",TourController.createTour);
route.get("/tour",TourController.getAll);
route.get("/tour/:id",TourController.getOneById);
route.patch("/tour/:id",TourController.updateTour);

route.post("/booking/create",BookingController.createBooking);
route.get("/booking",BookingController.getAll);
route.get("/booking/:id",BookingController.updateBooking);
route.patch("/booking/:id",BookingController.getOneById);

export default route;