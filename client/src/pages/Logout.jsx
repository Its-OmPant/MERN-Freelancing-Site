import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../contexts/authContext";

function Logout() {
	const { logout } = useAuth();

	useEffect(() => {
		logout();
	}, [logout]);

	return <Navigate to="/"></Navigate>;
}

export default Logout;