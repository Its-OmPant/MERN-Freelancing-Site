import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

import useAuth from "../../contexts/authContext";
import toast from "react-hot-toast";

function UpdateService() {
	const [serviceData, setServiceData] = useState({
		service: "",
		description: "",
		price: "",
		provider: "",
	});

	const onChangeHandler = (e) => {
		const obj = { ...serviceData, [e.target.name]: e.target.value };
		setServiceData(obj);
	};

	const navigate = useNavigate();
	const { token } = useAuth();
	const { id } = useParams();
	const getData = async (req, res) => {
		try {
			const response = await fetch(
				`http://localhost:8000/api/admin/services/${id}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.ok) {
				const data = await response.json();
				setServiceData(data.message);
			} else {
				throw "Unexpected Data Received";
			}
		} catch (error) {
			console.log("Unable to fetch Service, Error :: ", error);
		}
	};

	const submitData = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				`http://localhost:8000/api/admin/services/${id}`,

				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-type": "application/json",
					},
					method: "PATCH",
					body: JSON.stringify(serviceData),
				}
			);
			const data = await response.json();
			console.log(data);
			toast.success("Service Updated Successfully ");
			navigate("/admin/services");
		} catch (error) {
			console.error("Can't Submit Data,  Error :: ", error);
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="">
			<div className="flex gap-4 items-center bg-teal-700 p-3">
				<Link to={`../users`}>
					<FaArrowLeft />
				</Link>
				<h1 className="text-lg font-bold">Update Service</h1>
			</div>

			<form className="w-4/5 mx-auto mt-16 border-2 shadow-lg shadow-teal-700 p-4 py-8 rounded-md flex flex-col gap-6">
				<div className="flex gap-4 justify-center items-center">
					<label htmlFor="service" className="w-1/5 text-center">
						Service Name :
					</label>
					<input
						type="text"
						name="service"
						id="service"
						value={serviceData.service}
						onChange={onChangeHandler}
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
					/>
				</div>
				<div className="flex gap-4 justify-center items-center">
					<label htmlFor="description" className="w-1/5 text-center">
						Description :
					</label>
					<textarea
						name="description"
						id="description"
						value={serviceData.description}
						onChange={onChangeHandler}
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
					/>
				</div>
				<div className="flex gap-4 justify-center items-center">
					<label htmlFor="price" className="w-1/5 text-center">
						Price :
					</label>
					<input
						type="text"
						name="price"
						id="price"
						value={serviceData.price}
						onChange={onChangeHandler}
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
					/>
				</div>
				<div className="flex gap-4 justify-center items-center">
					<label htmlFor="provider" className="w-1/5 text-center">
						Provider :
					</label>
					<input
						type="text"
						name="provider"
						id="provider"
						value={serviceData.provider}
						onChange={onChangeHandler}
						className="w-4/5 p-2 rounded-md bg-slate-200 text-md text-black"
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

export default UpdateService;
