import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import connectToDB from "./db/connectDB.js";

// Routes
import AuthRouter from "./router/auth-router.js";

try {
	await connectToDB("mongodb://127.0.0.1:27017/adminPanelDB");
	const app = express();
	const PORT = 8000;

	app.use("/api/auth", AuthRouter);

	app.get("/", (req, res) => {
		console.log(process.env.NAME);
		res.send("Hello There");
	});

	app.listen(PORT, () => console.log("Server Started at Port:", PORT));
} catch (error) {
	console.log(error);
}
