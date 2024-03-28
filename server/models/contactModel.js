import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

const Contact = mongoose.model("contact", contactSchema);

export default Contact;
