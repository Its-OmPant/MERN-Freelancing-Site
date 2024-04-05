import express from "express";
import adminControllers from "../controllers/admin-controller.js";
const router = express.Router();

router.route("/users").get(adminControllers.getUsers);
router.route("/contacts").get(adminControllers.getContacts);

export default router;
