import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// pages
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/services" element={<Services />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
