import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/authContext.js";

function Register() {
	const initialState = {
		username: "",
		email: "",
		phone: "",
		password: "",
	};
	const [user, setUser] = useState(initialState);
	const navigate = useNavigate();

	const { storeTokenInLS } = useAuth();

	const handleInput = (e) => {
		// console.log(user[e.target.name]);
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8000/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			console.log(response);

			if (response.ok) {
				const data = await response.json();
				storeTokenInLS(data.token);
				setUser(initialState);

				navigate("/login");
			}
		} catch (error) {
			console.log("Error : ", error);
		}
	};

	return (
		<div className="flex h-[90vh] px-48">
			<div className="flex items-center justify-center w-full">
				<img
					src="./images/registration.jpg"
					alt="Registration form Image"
					className="w-4/5"
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<div className="w-4/5 bg-blue-200 p-4 rounded-md shadow-md">
					<h1 className="text-4xl m-4 font-bold">
						<span className="underline text-pink-800">Registration</span> Form
					</h1>
					<form action="" onSubmit={handleFormSubmit} className="p-2">
						<div>
							<label htmlFor="name">Username </label>
							<input
								id="name"
								type="text"
								name="username"
								placeholder="Username"
								value={user.username}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<div>
							<label htmlFor="email">Email </label>{" "}
							<input
								id="email"
								type="email"
								name="email"
								placeholder="E-mail ID"
								value={user.email}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<div>
							<label htmlFor="phoneNo">Phone </label>{" "}
							<input
								id="phoneNo"
								type="text"
								name="phone"
								placeholder="Mobile No."
								onChange={handleInput}
								value={user.phone}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<div>
							<label htmlFor="password">Password </label>{" "}
							<input
								id="password"
								type="password"
								name="password"
								value={user.password}
								onChange={handleInput}
								placeholder="Password"
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<button
							type="submit"
							className="w-full px-4 py-2 my-3 bg-blue-700  text-white hover:bg-blue-800 rounded-md">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
