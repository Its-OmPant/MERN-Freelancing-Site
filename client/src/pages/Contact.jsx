import React, { useState } from "react";
import useAuth from "../contexts/authContext";

function Contact() {
	const initialState = { email: "", username: "", message: "" };
	const [userMessage, setUserMessage] = useState(initialState);

	const [userData, setUserData] = useState(true);
	const { user } = useAuth();

	if (userData && user) {
		setUserMessage({
			email: user.email,
			username: user.username,
			message: "",
		});

		setUserData(false);
	}

	const handleInput = (e) => {
		setUserMessage({ ...userMessage, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userMessage),
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setUserMessage({ ...userMessage, message: "" });
			}
		} catch (error) {
			console.log("Error in contact: ", error);
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
						<span className="underline text-pink-800">Contact </span> Us
					</h1>
					<form action="" onSubmit={handleFormSubmit} className="p-2">
						<div>
							<label htmlFor="username">Username </label>{" "}
							<input
								id="username"
								type="text"
								name="username"
								placeholder="Username"
								value={userMessage.username}
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
								value={userMessage.email}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>

						<div>
							<label htmlFor="message">Message </label>{" "}
							<textarea
								id="message"
								type="text"
								name="message"
								rows={5}
								placeholder="Message"
								value={userMessage.message}
								onChange={handleInput}
								className="p-2 rounded my-2 w-full"
							/>
						</div>
						<button
							type="submit"
							className="w-full px-4 py-2 my-3 bg-blue-700  text-white hover:bg-blue-800 rounded-md">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
