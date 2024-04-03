const validate = (schema) => async (req, res, next) => {
	try {
		const parseBody = await schema.parseAsync(req.body);
		console.log(parseBody);
		req.body = parseBody;
		next();
	} catch (error) {
		res.status(400).json({ errors: error.errors[0] });
	}
};

export default validate;
