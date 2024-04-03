import express from "express";
import serviceController from "../controllers/service-controller.js";

const router = express.Router();

router.route("/all").get(serviceController.getServices);

export default router;
