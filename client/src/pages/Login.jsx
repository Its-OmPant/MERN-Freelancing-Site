import React, { useState } from "react";

function Login() {
	const initialState = { email: "", password: "" };
	const [credentials, setCredentials] = useState(initialState);

	const handleInput = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert("Login Successful");
		console.log(credentials);
		setCredentials(initialState);
	};
	return (
		<div className="flex h-[90vh]">
			<div className="flex items-center justify-center w-full">
				<img
					src="./images/login.jpg"
					alt="Registration form Image"
					className="w-[70%]"
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<div className="w-3/5 bg-blue-200 p-4 rounded-md shadow-md">
					<h1 className="text-4xl m-4 font-bold">
						<span className="underline text-pink-800">Login</span> Form
					</h1>
					<form action="" onSubmit={handleFormSubmit} className="p-2">
						<div>
							<label htmlFor="email">Email </label>{" "}
							<input
								id="email"
								type="email"
								name="email"
								placeholder="E-mail ID"
								value={credentials.email}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<div>
							<label htmlFor="password">Password </label>{" "}
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Password"
								value={credentials.password}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<button
							type="submit"
							className="w-full px-4 py-2 my-3 bg-blue-700  text-white hover:bg-blue-800 rounded-md">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
