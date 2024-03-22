const home = (req, res) => {
	res.send("Its Authentication Page of auth");
};

const register = (req, res) => {
	res.send("Its Register Page of auth");
};

const authControllers = {
	home,
	register,
};

export default authControllers;
