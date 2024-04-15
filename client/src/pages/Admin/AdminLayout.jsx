import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/authContext";

function AdminLayout() {
	const [token, setToken] = useState(localStorage.getItem("token"));

	return (
		<AuthContextProvider value={{ token }}>
			<div className="bg-slate-800 text-white min-h-screen">
				<div className="flex">
					<div
						id="nav"
						className="w-1/5 min-h-screen border-2 border-teal-300 p-4">
						<ul className="flex flex-col">
							<NavLink to="/admin/users" className="bg-slate-700 my-2 p-2">
								Users
							</NavLink>
							<NavLink to="/admin/contacts" className="bg-slate-700 my-2 p-2">
								Contact
							</NavLink>
							<NavLink to="/admin/services" className="bg-slate-700 my-2 p-2">
								Services
							</NavLink>
							<NavLink to="/" className="bg-slate-700 my-2 p-2">
								Home
							</NavLink>
						</ul>
					</div>
					<div className="w-4/5 min-h-screen border-2 border-teal-300 p-4">
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
