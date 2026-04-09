import { Router } from "express";
import registerUser from "../Controllers/signup.controller.js";
import { loginUser } from "../Controllers/Login.controller.js";
import { getDoctors } from "../Controllers/Doctors.controller.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/doctor").get(getDoctors)

export default router;