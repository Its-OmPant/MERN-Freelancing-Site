import mongoose from "mongoose";

const connectToDB = async (URI) => {
	try {
		await mongoose.connect(URI);
		console.log("Connection to DB Successful");
	} catch (error) {
		throw `Connection to DB Failed Error:: ,${error}`;
	}
};

export default connectToDB;
