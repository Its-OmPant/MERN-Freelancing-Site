import React from "react";

function ServiceCard({ service, description, price, provider }) {
	return (
		<div className="w-1/3 bg-teal-300 rounded-md mx-4 my-3 p-2">
			<h1>{service}</h1>
			<h1>{description}</h1>
			<h1>{price}</h1>
			<h1>{provider}</h1>
		</div>
	);
}

export default ServiceCard;
