import User from "../models/userModel.js";

import bcrypt from "bcryptjs";
const home = (req, res) => {
	res.send("Its Authentication Page of auth");
};

const register = async (req, res) => {
	try {
		const { username, email, phone, password } = req.body;

		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(400).send("User already Exist...");
		}

		const userCreated = await User.create({ username, email, phone, password });
		res.status(201).send({
			message: "User Created",
			token: await userCreated.generateToken(),
			userID: userCreated._id.toString(),
		});
	} catch (error) {
		console.error(error);
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ msg: "Invalid Credentials" });
		}

		const isPasswordMatched = await user.comparePassword(password);

		if (isPasswordMatched) {
			res.status(200).json({
				msg: "Login Successful",
				token: await user.generateToken(),
				userID: user._id.toString(),
			});
		} else {
			res.status(401).json({ msg: "Invalid useremail or password" });
		}
	} catch (error) {
		console.log(error);
	}
};

const authControllers = {
	home,
	register,
	login,
};

export default authControllers;
