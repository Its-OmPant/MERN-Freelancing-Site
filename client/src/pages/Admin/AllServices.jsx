import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../../contexts/authContext.js";

function Row({ u, deleteService }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td className="py-2">{u.service}</td>
			<td className="py-2 w-1/5">{u.description}</td>
			<td className="py-2">{u.price}</td>
			<td className="py-2">{u.provider}</td>
			<td className="py-2">
				<button
					onClick={() => {
						deleteService(u["_id"]);
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
	const [services, setServices] = useState([]);

	const { token } = useAuth();

	const deleteService = async (id) => {
		try {
			const res = await fetch(
				`http://localhost:8000/api/admin/services/${id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (res.ok) {
				toast.success("Service Deleted");
				getData();
			}
		} catch (error) {
			console.log(error);
		}
	};

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
						<th>Delete</th>
						<th>Update</th>
					</tr>
				</thead>
				<tbody>
					{services.map((u) => (
						<Row deleteService={deleteService} u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllUsers;
