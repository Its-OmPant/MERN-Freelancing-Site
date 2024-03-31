import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import connectToDB from "./db/connectDB.js";
import cors from "cors";

// Routes
import AuthRouter from "./router/auth-router.js";
import ContactRouter from "./router/contact-router.js";

try {
	await connectToDB(process.env.MONGODB_URL);
	const app = express();
	const PORT = 8000;

	app.use(cors());
	app.use(express.json()); //body parser

	app.use("/api/auth", AuthRouter);
	app.use("/api/contact", ContactRouter);

	app.get("/", (req, res) => {
		res.send("Hello There");
	});

	app.listen(PORT, () => console.log("Server Started at Port:", PORT));
} catch (error) {
	console.log(error);
}
