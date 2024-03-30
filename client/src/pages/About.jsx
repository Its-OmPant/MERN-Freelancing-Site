import React from "react";

function About() {
	return (
		<div className="px-48">
			<div id="hero" className="flex justify-center my-4">
				<div className=" p-4 flex flex-col justify-center">
					<div className="my-4">
						<h3 className="text-lg"> Welcome to Freelancing.co </h3>
						<h1 className="text-5xl font-bold tracking-wide my-4">
							Why
							<span className="text-pink-900 underline underline-offset-8 ml-3">
								Choose Us ?
							</span>
						</h1>
					</div>
					<p className="my-3 text-lg">
						<span className="text-pink-900 underline underline-offset-2 font-semibold mr-2">
							Experties:
						</span>
						Our team consists of experienced IT professionals who are passionate
						and committed about staying up-to-date with the latest industry
						trends
					</p>
					<p className="my-3 text-lg">
						<span className="text-yellow-700 underline underline-offset-2 font-semibold mr-2">
							Customization:
						</span>
						We understand that every business is unique. That's why we create
						solutions that are tailoured to your specific needs and goals.
					</p>
					<p className="my-3 text-lg">
						<span className="text-green-900 underline underline-offset-2 font-semibold mr-2">
							Customer-Centric Approach :
						</span>
						We prioritize your satisfaction and provise top-notch support to
						address your IT concerns.
					</p>
					<p className="my-3 text-lg">
						<span className="text-orange-900 underline underline-offset-2 font-semibold mr-2">
							Affordability:
						</span>
						We offer competetive pricing without compromising on the quality of
						our services.
					</p>
					<p className="my-3 text-lg">
						<span className="text-teal-900 underline underline-offset-2 font-semibold mr-2">
							Reliability:
						</span>
						Count on us to be there when you need us. We're committed to
						ensuring your IT environment is reliable and available 24/7.
					</p>

					<div id="btnGroup" className="my-4">
						<button className="px-4 py-3 rounded-md bg-purple-600 text-white  mr-4">
							Connect Now
						</button>
						<button className="px-4 py-3 rounded-md border-purple-600 border-2 mr-4">
							Learn more
						</button>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<img
						src="./images/about.png"
						alt="Welcome Image"
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
