import User from "../models/userModel.js";
const home = (req, res) => {
	res.send("Its Authentication Page of auth");
};

const register = async (req, res) => {
	try {
		const { username, email, phone, password } = req.body;

		const userExist = await User.findOne({ email });

		if (userExist) {
			return res.status(400).json({ message: "User already exist" });
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
			return res.status(400).json({ errors: "User doesn't exist!!" });
		}

		const isPasswordMatched = await user.comparePassword(password);

		if (isPasswordMatched) {
			res.status(200).json({
				msg: "Login Successful",
				token: await user.generateToken(),
				userID: user._id.toString(),
			});
		} else {
			res.status(401).json({ errors: "Invalid useremail or password" });
		}
	} catch (error) {
		console.log(error);
	}
};

const user = (req, res) => {
	try {
		return res.status(200).json({ user: req.user });
	} catch (error) {
		console.log("User Controller Error :: ", error);
	}
};

const authControllers = {
	home,
	register,
	login,
	user,
};

export default authControllers;
