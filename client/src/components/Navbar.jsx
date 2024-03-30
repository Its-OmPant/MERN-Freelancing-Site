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
						<NavLink to="/" className="hover:underline underline-offset-2 ">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className="hover:underline underline-offset-2 ">
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/services"
							className="hover:underline underline-offset-2 ">
							Services
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className="hover:underline underline-offset-2 ">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login"
							className="hover:underline underline-offset-2 ">
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/register"
							className="hover:underline underline-offset-2 ">
							Register
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
