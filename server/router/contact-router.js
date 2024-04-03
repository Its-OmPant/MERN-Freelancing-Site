import express from "express";

import { ContactSchema } from "../validators/contact-validator.js";
import validate from "../middlewares/validator.js";

import contactControllers from "../controllers/contact-controller.js";

const router = express.Router();

router.route("/").post(validate(ContactSchema), contactControllers.contactMe);

export default router;
