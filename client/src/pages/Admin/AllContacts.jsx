import React, { useEffect, useState } from "react";

import useAuth from "../../contexts/authContext.js";

function Row({ u }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td>{u.username}</td>
			<td>{u.email}</td>
			<td>{u.message}</td>
			<td>Update</td>
			<td>Delete</td>
		</tr>
	);
}

function AllContacts() {
	const [contacts, setContacts] = useState([]);

	const { token } = useAuth();

	const getData = async () => {
		const response = await fetch("http://localhost:8000/api/admin/contacts", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const resData = await response.json();
		if (response.ok) {
			console.log("fetching contacts");
			setContacts(resData.message);
		} else {
			console.log(resData);
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="w-full">
			<h1 className="bg-green-700 p-3 my-2  text-xl font-bold">All contacts</h1>
			<table className="w-full">
				<thead className="bg-teal-800">
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Message</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((u) => (
						<Row u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllContacts;
