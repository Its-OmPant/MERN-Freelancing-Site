import { z } from "zod";

export const ContactSchema = z.object({
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
	message: z
		.string({ required_error: "Message is Required" })
		.trim()
		.min(5, {
			message: "Message must be greater than or equal to 5 characters",
		})
		.max(500, { message: "Username can't be greater than 500 characters" }),
});
