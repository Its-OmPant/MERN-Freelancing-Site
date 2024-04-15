import express from "express";
import adminControllers from "../controllers/admin-controller.js";
import authVerifier from "../middlewares/authVerifier.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
const router = express.Router();

router.route("/").get(authVerifier, adminMiddleware);
router
	.route("/users")
	.get(authVerifier, adminMiddleware, adminControllers.getUsers);
router
	.route("/contacts")
	.get(authVerifier, adminMiddleware, adminControllers.getContacts);
router
	.route("/services")
	.get(authVerifier, adminMiddleware, adminControllers.getServices);

export default router;
