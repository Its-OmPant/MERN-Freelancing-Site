import Service from "../models/serviceModel.js";

const getServices = async (req, res) => {
	try {
		const response = await Service.find();
		if (!response) {
			return res.status(404).json({ msg: "not found" });
		}

		return res.status(200).json(response);
	} catch (error) {
		console.log("Service Controller Error :: ", error);
	}
};

const services = {
	getServices,
};

export default services;
