import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import useAuth from "../../contexts/authContext";
import toast from "react-hot-toast";

function UpdateUser() {
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		phone: "",
	});

	const onChangeHandler = (e) => {
		const obj = { ...userData, [e.target.name]: e.target.value };
		setUserData(obj);
	};

	const navigate = useNavigate();
	const { token } = useAuth();
	const { id } = useParams();

	const getUserData = async () => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/admin/users/${id}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const data = await response.json();
			// console.log(data);
			if (response.ok) {
				setUserData(data.message);
			} else {
				throw "Got Unexpected Data";
			}
		} catch (error) {
			console.error("Couldn't Fetch User Error :: ", error);
		}
	};

	const submitData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:8000/api/admin/users/${id}`,

				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-type": "application/json",
					},
					method: "PATCH",
					body: JSON.stringify(userData),
				}
			);
			const data = await response.json();
			console.log(data);
			toast.success("User Updated Successfully ");
			navigate("/admin/users");
		} catch (error) {
			console.error("Can't Submit Data,  Error :: ", error);
		}
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="">
			<div className="flex gap-4 items-center bg-teal-700 p-3">
				<Link to={`../users`}>
					<FaArrowLeft />
				</Link>
				<h1 className="text-lg font-bold">Update User</h1>
			</div>
			<form className="w-1/2 mx-auto mt-16 border-2 shadow-lg shadow-teal-700 p-4 py-8 rounded-md flex flex-col gap-6">
				<div className="flex gap-4 justify-center items-center">
					Name :
					<input
						type="text"
						name="username"
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
						value={userData.username}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="flex gap-4 justify-center items-center">
					Email :
					<input
						type="email"
						name="email"
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
						value={userData.email}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="flex gap-4 justify-center items-center">
					Phone :
					<input
						type="text"
						name="phone"
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
						value={userData.phone}
						onChange={onChangeHandler}
					/>
				</div>
				<button
					onClick={submitData}
					className=" px-4 py-2 mt-6 bg-teal-400 text-lg rounded-md text-black">
					Submit
				</button>
			</form>
		</div>
	);
}

export default UpdateUser;
