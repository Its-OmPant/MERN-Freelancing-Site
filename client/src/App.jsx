import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";

//context
import { AuthContextProvider } from "./contexts/authContext.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState("");

	const storeTokenInLS = (servertoken) => {
		setToken(servertoken);
		localStorage.setItem("token", servertoken);
	};

	const isLoggedIn = !!token;

	const logout = () => {
		setToken("");
		localStorage.removeItem("token");
		setUser("");
	};

	const getUserData = async () => {
		// console.log("************get data called****************");
		try {
			if (!token) {
				throw "Token not available";
			}
			const response = await fetch("http://localhost:8000/api/auth/user", {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			// console.log("res ;", response);
			if (response.ok) {
				const data = await response.json();
				// console.log(data.user);
				setUser(data.user);
			}
		} catch (error) {
			console.log("Unable to fetch user data Error ::", error);
		}
	};

	useEffect(() => {
		// console.log("************use effect****************");
		getUserData();
	}, [token]);

	return (
		<AuthContextProvider value={{ storeTokenInLS, logout, isLoggedIn, user }}>
			<Toaster position="top-right" />
			<Navbar />
			<Outlet />
			<Footer />
		</AuthContextProvider>
	);
}

export default App;
