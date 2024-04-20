import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../contexts/authContext.js";

function Row({ u, deleteContact }) {
	return (
		<tr className="text-center hover:bg-slate-600 ">
			<td className="py-2">{u.username}</td>
			<td className="py-2">{u.email}</td>
			<td className="py-2 w-1/5">{u.message}</td>
			<td className="py-2">
				<button
					onClick={() => {
						deleteContact(u["_id"]);
					}}
					className="w-1/2 h-full my-2  bg-red-500 rounded-md hover:scale-110">
					Delete
				</button>
			</td>
		</tr>
	);
}

function AllContacts() {
	const [contacts, setContacts] = useState([]);

	const { token } = useAuth();

	const deleteContact = async (id) => {
		try {
			// console.log(id);
			const res = await fetch(
				`http://localhost:8000/api/admin/contacts/${id}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (res.ok) {
				toast.success("Contact Deleted");
				getData();
			}
		} catch (error) {
			console.log(error);
		}
	};

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
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((u) => (
						<Row deleteContact={deleteContact} u={u} key={u["_id"]} />
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AllContacts;
