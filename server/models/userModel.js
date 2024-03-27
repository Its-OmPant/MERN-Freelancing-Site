import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

UserSchema.pre("save", async function (next) {
	const currentUser = this;

	if (!currentUser.isModified("password")) {
		next();
	}

	try {
		const genSalt = await bcrypt.genSalt(10);
		const hashed_password = await bcrypt.hash(currentUser.password, genSalt);

		currentUser.password = hashed_password;
	} catch (error) {
		next(error);
	}
});

UserSchema.methods.generateToken = async function () {
	try {
		return jsonwebtoken.sign(
			{
				userID: this._id.toString(),
				email: this.email,
				isAdmin: this.isAdmin,
			},
			process.env.JWT_SECRET_KEY,
			{
				expiresIn: "30d",
			}
		);
	} catch (error) {
		console.error("JWT ERROR :: ", error);
	}
};

UserSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", UserSchema);

export default User;
