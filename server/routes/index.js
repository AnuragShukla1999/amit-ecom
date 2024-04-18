import express from "express";
import userSignUpController from "../controller/user/userSignUp";
import userSignInController from "../controller/user/userSignIn";
import authToken from "../middleware/authToken";
import userDetailsController from "../controller/user/userDetails";
import userLogout from "../controller/user/userLogout";

const router = express.Router();


router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

// admin panel
// router.get("/all-user",authToken, userSignUpController);
// router.post("/signup", userSignUpController);
// router.post("/signup", userSignUpController);


export default router;