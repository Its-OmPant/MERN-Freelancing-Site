import User from "../models/userModel.js";
import Contact from "../models/contactModel.js";
import Service from "../models/serviceModel.js";

// User Model Controllers

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

const deleteUser = async (req, res) => {
	try {
		const userId = req.params.id;
		const user = await User.findByIdAndDelete(userId);
		// console.log(user);
		res.status(200).json({ message: `Deleted the User: ${user.username}` });
	} catch (error) {
		console.log("Admin Controller Error at deleteUser :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while Deleting user" });
	}
};

const getUserById = async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.findById(id).select({ password: 0 });
		return res.status(200).json({ message: user });
	} catch (error) {
		console.log("Admin Controller Error at getUserById :: ", error);
		return res
			.status(400)
			.json({ message: "some error occured while Fetching a user" });
	}
};

const updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const { username, email, phone } = req.body;

		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ username, email, phone },
			{ returnDocument: "after" }
		);
		return res.status(200).json({ message: `User Updated Successfully` });
	} catch (error) {
		console.log("Admin Controller Error at updateUser :: ", error);
		return res
			.status(400)
			.json({ message: "some error occured while updating user" });
	}
};

// Contact Model Controllers

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

const deleteContact = async (req, res) => {
	try {
		const id = req.params.id;
		const contact = await Contact.findByIdAndDelete(id);
		res.status(200).json({
			message: `Deleted Contact of: ${contact.username} with Message: ${contact.message}`,
		});
	} catch (error) {
		console.log("Admin Controller Error at getContacts :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while Deleting Contact" });
	}
};

// Service Model Controllers

const getServices = async (req, res) => {
	try {
		const services = await Service.find();
		if (!services || services.length === 0) {
			return res.status(404).json({ message: "Services not found" });
		}
		return res.status(200).json({ message: services });
	} catch (error) {
		console.log("Admin Controller Error at getServices :: ", error);
		return res
			.status(404)
			.json({ message: "some error occured while fetching Services" });
	}
};

const deleteService = async (req, res) => {
	try {
		const id = req.params.id;
		const service = await Service.findByIdAndDelete(id);
		return res
			.status(200)
			.json({ message: `Deleted Service: ${service.service}` });
	} catch (error) {
		console.log("Admin controller error at deleteService :: ", error);
		return res
			.status(400)
			.json({ message: "some error occured while deleting Services" });
	}
};

const getServiceById = async (req, res) => {
	try {
		const id = req.params.id;
		const service = await Service.findById(id);
		return res.status(200).json({ message: service });
	} catch (error) {
		console.log("Admin Controller Error at getServiceById Error :: ", error);
		res
			.status(400)
			.json({ message: "some error occured while fetching a Service" });
	}
};

const updateService = async (req, res) => {
	try {
		const id = req.params.id;
		const { service, description, price, provider } = req.body;

		const updatedService = await Service.findByIdAndUpdate(
			id,
			{ service, description, price, provider },
			{ returnDocument: "after" }
		);

		res.status(200).json("Service Data Updated in DB Successfully");
	} catch (error) {
		console.log("Admin Controller Error at updateService, Error :: ", error);
		res
			.status(400)
			.json({ message: "some error occured while updating a Service" });
	}
};

const controllers = {
	getUsers,
	getUserById,
	getContacts,
	getServices,
	deleteUser,
	deleteContact,
	deleteService,
	updateUser,
	getServiceById,
	updateService,
};

export default controllers;
