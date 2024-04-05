import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../contexts/authContext.js";
import toast from "react-hot-toast";

function Login() {
	const initialState = { email: "", password: "" };
	const [credentials, setCredentials] = useState(initialState);
	const navigate = useNavigate();
	const { storeTokenInLS } = useAuth();
	const handleInput = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8000/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(credentials),
			});
			const data = await response.json();
			if (response.ok) {
				storeTokenInLS(data.token);
				navigate("/");
				setCredentials(initialState);
				toast.success("Logged In successfully");
			} else {
				toast.error(data.errors);
			}
		} catch (error) {
			toast.error("Unable to login, Something unexpected happened");
			// console.error("Login Error :: ", error);
		}
	};
	return (
		<div className="flex h-[90vh] px-48">
			<div className="flex items-center justify-center w-full">
				<img
					src="./images/login.jpg"
					alt="Registration form Image"
					className="w-4/5"
				/>
			</div>
			<div className="flex items-center justify-center w-full">
				<div className="w-4/5 bg-blue-200 p-4 rounded-md shadow-md">
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
								required={true}
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
								required={true}
							/>
						</div>
						<p className="text-right text-md">
							don't have an account ?{" "}
							<NavLink
								to="/register"
								className="text-red-700 hover:underline underline-offset-2 ">
								Register
							</NavLink>
						</p>
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
