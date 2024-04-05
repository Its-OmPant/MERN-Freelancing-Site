import User from "../models/userModel.js";
import Contact from "../models/contactModel.js";

const getUsers = async (req, res) => {
	try {
		const users = await User.find().select({ password: 0 });
		if (!users || users.length === 0) {
			return res.status(404).json({ message: "Users not found" });
		}
		return res.status(200).json({ message: users });
	} catch (error) {
		console.log("Admin Controller Error :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while fetching users" });
	}
};

const getContacts = async (req, res) => {
	try {
		const contacts = await Contact.find();
		if (!contacts || contacts.length === 0) {
			return res.status(404).json({ message: "Contacts not found" });
		}
		return res.status(200).json({ message: contacts });
	} catch (error) {
		console.log("Admin Controller Error :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while fetching contacts" });
	}
};

const controllers = { getUsers, getContacts };

export default controllers;
