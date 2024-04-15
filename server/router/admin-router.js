import express from "express";
import adminControllers from "../controllers/admin-controller.js";
import authVerifier from "../middlewares/authVerifier.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";
const router = express.Router();

router.route("/").get(authVerifier, adminMiddleware);

// Users Routes
router
	.route("/users")
	.get(authVerifier, adminMiddleware, adminControllers.getUsers);
router
	.route("/users/:id")
	.delete(authVerifier, adminMiddleware, adminControllers.deleteUser);

// Contacts Routes
router
	.route("/contacts")
	.get(authVerifier, adminMiddleware, adminControllers.getContacts);
router
	.route("/contacts/:id")
	.delete(authVerifier, adminMiddleware, adminControllers.deleteContact);

// Services Routes
router
	.route("/services")
	.get(authVerifier, adminMiddleware, adminControllers.getServices);
router
	.route("/services/:id")
	.delete(authVerifier, adminMiddleware, adminControllers.deleteService);

export default router;
