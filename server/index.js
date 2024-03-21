import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	res.send("Hello There");
});

app.listen(PORT, () => console.log("Server Started at Port:", PORT));
