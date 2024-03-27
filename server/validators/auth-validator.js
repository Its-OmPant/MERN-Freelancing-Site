import { z } from "zod";

const signUpSchema = z.object({
	username: z
		.string({ required_error: "Username is required" })
		.trim()
		.min(3, {
			message: "Username must be greater than or equal to 3 characters",
		})
		.max(255, { message: "Username can't be greater than 255 characters" }),
	email: z
		.string({ required_error: "Email is required" })
		.email({ message: "Invalid Email address" })
		.trim()
		.min(3, {
			message: "Email must be atleast of 6 characters",
		})
		.max(255, { message: "Email can't be greater than 255 characters" }),
	phone: z
		.string({ required_error: "Phone is required" })
		.trim()
		.min(10, {
			message: "Phone must be greater than or equal to 10 characters",
		})
		.max(20, { message: "Phone can't be greater than 20 characters" }),
	password: z
		.string({ required_error: "Password is required" })
		.min(6, {
			message: "Password must be greater than or equal to 6 characters",
		})
		.max(50, { message: "Password can't be greater than 50 characters" }),
});

export default signUpSchema;
