import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./main.css";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Logout from "./pages/Logout.jsx";

import AdminLayout from "./pages/Admin/AdminLayout.jsx";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import AllUsers from "./pages/Admin/AllUsers.jsx";
import AllContacts from "./pages/Admin/AllContacts.jsx";
import AllServices from "./pages/Admin/AllServices.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements([
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/services" element={<Services />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/logout" element={<Logout />} />
		</Route>,
		<Route path="/admin" element={<AdminLayout />}>
			<Route path="" element={<AdminHome />} />
			<Route path="users" element={<AllUsers />} />
			<Route path="contacts" element={<AllContacts />} />
			<Route path="services" element={<AllServices />} />
		</Route>,
	])
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
