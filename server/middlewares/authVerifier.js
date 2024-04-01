import jsonwebtoken from "jsonwebtoken";
import User from "../models/userModel.js";

const authVerifier = async (req, res, next) => {
	try {
		const token = req.header("Authorization");

		if (!token) {
			// if token is not present or expired
			return res
				.status(401)
				.json({ message: "Unauthorized, HTTP token not provided" });
		}

		const jwtToken = token.replace("Bearer", "").trim();

		try {
			const isTokenLegit = jsonwebtoken.verify(
				jwtToken,
				process.env.JWT_SECRET_KEY
			);
			const userData = await User.findOne(
				{ email: isTokenLegit.email },
				{ password: 0 }
			);
			req.user = userData;
			req.token = token;
			req.id = userData._id;
			next();
		} catch (error) {
			return res.status(401).json({ message: "Invalid Token" });
		}
	} catch (error) {
		console.log("Auth Middleware error :: ", error);
	}
};

export default authVerifier;
