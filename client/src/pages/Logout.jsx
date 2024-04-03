import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../contexts/authContext";
import toast from "react-hot-toast";

function Logout() {
	const { logout } = useAuth();

	useEffect(() => {
		toast.success("Logged Out Successfully");
		logout();
	}, [logout]);

	return <Navigate to="/"></Navigate>;
}

export default Logout;
