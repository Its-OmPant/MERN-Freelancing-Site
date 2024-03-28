import express from "express";

import contactControllers from "../controllers/contact-controller.js";

const router = express.Router();

router.route("/").post(contactControllers.contactMe);

export default router;
