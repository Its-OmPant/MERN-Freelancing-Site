import { Outlet } from "react-router-dom";

//context
import { AuthContextProvider } from "./contexts/authContext.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
	const [token, setToken] = useState(localStorage.getItem("token"));

	const storeTokenInLS = (token) => {
		localStorage.setItem("token", token);
	};

	const isLoggedIn = !!token;

	const logout = () => {
		setToken("");
		localStorage.removeItem("token");
	};

	return (
		<AuthContextProvider value={{ storeTokenInLS, logout, isLoggedIn }}>
			<Navbar />
			<Outlet />
			<Footer />
		</AuthContextProvider>
	);
}

export default App;
