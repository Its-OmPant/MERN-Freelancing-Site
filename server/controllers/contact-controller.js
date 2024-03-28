import Contact from "../models/contactModel.js";

const contactMe = async (req, res) => {
	try {
		let { username, email, message } = req.body;

		let newContact = new Contact({ username, email, message });
		await newContact.save();
		res.status(201).json({ msg: "Message sent", data: newContact });
	} catch (error) {
		console.log(error);
		res.status(400).json({ error });
	}
};

const controllers = {
	contactMe,
};

export default controllers;
