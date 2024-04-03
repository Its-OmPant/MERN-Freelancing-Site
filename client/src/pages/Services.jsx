import React, { useEffect, useState } from "react";

import ServiceCard from "../components/ServiceCard";

function Services() {
	const [data, setData] = useState([]);

	const getServices = async () => {
		try {
			const response = await fetch("http://localhost:8000/api/service/all");

			if (response.ok) {
				const resData = await response.json();
				console.log(resData);
				setData(resData);
			}
		} catch (error) {
			console.error("Unable to fetch services, error:: ", error);
		}
	};
	useEffect(() => {
		getServices();
	}, []);
	return (
		<div className="flex h-[90vh] px-48">
			<div className="my-4 flex flex-wrap justify-center">
				{data.length ? (
					data.map((d) => (
						<ServiceCard
							key={d["_id"]}
							service={d.service}
							description={d.description}
							price={d.price}
							provider={d.provider}></ServiceCard>
					))
				) : (
					<h3 className=" text-xl text-red-500 mx-auto mt-20">
						Nothing to show here
					</h3>
				)}
			</div>
		</div>
	);
}

export default Services;
