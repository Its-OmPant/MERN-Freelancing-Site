const adminMiddleware = (req, res, next) => {
	if (!req.user.isAdmin) {
		return res.status(400).json({ message: "Unaothorized, Not an admin" });
	} else {
		next();
	}
};

export default adminMiddleware;
