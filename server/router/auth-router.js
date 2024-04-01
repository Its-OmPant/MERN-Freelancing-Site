import express from "express";
const router = express.Router();

import signUpSchema from "../validators/auth-validator.js";
import validate from "../middlewares/validator.js";
import authVerifier from "../middlewares/authVerifier.js";

// controllers
import authControllers from "../controllers/auth-controller.js";

router.route("/").get(authControllers.home);
router
	.route("/register")
	.post(validate(signUpSchema), authControllers.register);
router.route("/login").post(authControllers.login);
router.route("/user").get(authVerifier, authControllers.user);
export default router;
