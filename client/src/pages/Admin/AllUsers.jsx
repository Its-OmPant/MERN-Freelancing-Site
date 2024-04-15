import React, { useEffect, useState } from "react";

import useAuth from "../../contexts/authContext.js";

function Row({ u }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td>{u.username}</td>
			<td>{u.email}</td>
			<td>{u.phone}</td>
			<td>Update</td>
			<td>Delete</td>
		</tr>
	);
}

function AllUsers() {
	const [users, setUsers] = useState([]);

	const { token } = useAuth();

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
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{users.map((u) => (
						<Row u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllUsers;
