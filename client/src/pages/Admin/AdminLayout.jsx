import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "../../contexts/authContext";

import { FaUser, FaMessage, FaAward, FaDeleteLeft } from "react-icons/fa6";
import { FaHome, FaPen } from "react-icons/fa";

function AdminLayout() {
	const [token, setToken] = useState(localStorage.getItem("token"));

	return (
		<AuthContextProvider value={{ token }}>
			<Toaster position="top-right" />

			<div className="bg-slate-800 text-white min-h-screen ">
				<div className="flex">
					<div
						id="nav"
						className="w-[15%] min-h-screen border-2 border-teal-300 p-4">
						<ul className="flex flex-col">
							<NavLink
								to="/admin/users"
								className="bg-slate-700 my-2 p-2 flex items-center gap-2">
								<FaUser></FaUser>
								Users
							</NavLink>
							<NavLink
								to="/admin/contacts"
								className="bg-slate-700 my-2 p-2 flex items-center gap-2">
								<FaMessage></FaMessage>
								Contact
							</NavLink>
							<NavLink
								to="/admin/services"
								className="bg-slate-700 my-2 p-2 flex items-center gap-2">
								<FaAward></FaAward>
								Services
							</NavLink>
							<NavLink
								to="/"
								className="bg-slate-700 my-2 p-2 flex items-center gap-2">
								<FaHome></FaHome>
								Home
							</NavLink>
						</ul>
					</div>
					<div className="w-[85%] min-h-screen border-2 border-teal-300 p-4">
						<h1 className="text-center text-xl my-3 font-bold">
							Admin Dashboard
						</h1>
						<Outlet />
					</div>
				</div>
			</div>
		</AuthContextProvider>
	);
}

export default AdminLayout;
