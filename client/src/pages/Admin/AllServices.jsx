import React, { useEffect, useState } from "react";

import useAuth from "../../contexts/authContext.js";

function Row({ u }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td>{u.service}</td>
			<td>{u.description}</td>
			<td>{u.price}</td>
			<td>{u.provider}</td>
			<td>Update</td>
			<td>Delete</td>
		</tr>
	);
}

function AllUsers() {
	const [services, setServices] = useState([]);

	const { token } = useAuth();

	const getData = async () => {
		const response = await fetch("http://localhost:8000/api/admin/services", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const resData = await response.json();
		if (response.ok) {
			console.log("fetching services");
			setServices(resData.message);
		} else {
			console.log(resData);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="w-full">
			<h1 className="bg-pink-700 p-3 my-2  text-xl font-bold">All Services</h1>
			<table className="w-full">
				<thead className="bg-teal-800">
					<tr>
						<th>Service</th>
						<th>Description</th>
						<th>Price</th>
						<th>Provider</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{services.map((u) => (
						<Row u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllUsers;
