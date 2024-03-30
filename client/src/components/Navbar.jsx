import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div className="flex justify-around bg-purple-800 p-4 text-white text-lg">
			<div className="">
				<NavLink to="/">Freelancing</NavLink>
			</div>
			<div className="">
				<ul className="flex gap-8">
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
