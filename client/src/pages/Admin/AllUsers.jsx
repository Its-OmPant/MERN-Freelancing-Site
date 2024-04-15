import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../../contexts/authContext.js";

function Row({ u, deleteUser }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td className="py-2">{u.username}</td>
			<td className="py-2">{u.email}</td>
			<td className="py-2">{u.phone}</td>
			<td className="py-2">
				<button
					onClick={() => {
						deleteUser(u["_id"]);
					}}
					className="w-1/2 h-full my-2  bg-red-500 rounded-md hover:scale-110">
					Delete
				</button>
			</td>
			<td className="py-2">Update</td>
		</tr>
	);
}

function AllUsers() {
	const [users, setUsers] = useState([]);

	const { token } = useAuth();

	const deleteUser = async (id) => {
		try {
			// console.log(id);
			const res = await fetch(`http://localhost:8000/api/admin/users/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (res.ok) {
				toast.success("User Deleted");
				getData();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getData = async () => {
		const response = await fetch("http://localhost:8000/api/admin/users", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const resData = await response.json();
		if (response.ok) {
			console.log("fetching users");
			setUsers(resData.message);
		} else {
			console.log(resData);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="w-full">
			<h1 className="bg-yellow-700 p-3 my-2  text-xl font-bold">All Users</h1>
			<table className="w-full">
				<thead className="bg-teal-800">
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Delete</th>
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<Row deleteUser={deleteUser} u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllUsers;
