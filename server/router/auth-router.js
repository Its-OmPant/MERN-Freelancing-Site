import express from "express";
const router = express.Router();

// controllers
import authControllers from "../controllers/auth-controller.js";

router.route("/").get(authControllers.home);
router.route("/register").get(authControllers.register);

export default router;
