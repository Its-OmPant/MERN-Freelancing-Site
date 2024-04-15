import User from "../models/userModel.js";
import Contact from "../models/contactModel.js";
import Service from "../models/serviceModel.js";

const getUsers = async (req, res) => {
	try {
		const users = await User.find().select({ password: 0 });
		if (!users || users.length === 0) {
			return res.status(404).json({ message: "Users not found" });
		}
		return res.status(200).json({ message: users });
	} catch (error) {
		console.log("Admin Controller Error at getUsers :: ", error);
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
		console.log("Admin Controller Error at getContacts :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while fetching contacts" });
	}
};

const getServices = async (req, res) => {
	try {
		const services = await Service.find();
		if (!services || services.length === 0) {
			return res.status(404).json({ message: "Services not found" });
		}
		return res.status(200).json({ message: services });
	} catch (error) {
		console.log("Admin Controller Error at getServices :: ", error);
	}
};

const controllers = { getUsers, getContacts, getServices };

export default controllers;
