const Home = () => {
	return (
		<div className="px-48">
			<div id="hero" className="flex justify-center my-16">
				<div className=" p-4 flex flex-col justify-center">
					<div className="my-4">
						<h3 className="text-lg">Hey There ...</h3>
						<h1 className="text-7xl font-bold tracking-wide my-4">
							Welcome to
							<span className="text-pink-900 underline underline-offset-8">
								Freelancing.co
							</span>
						</h1>
						<h4 className="text-lg">World's best IT Company</h4>
					</div>
					<p className="my-5">
						Are you ready to take your business to next level with the help of
						cutting edge technology? look no further! At Freelancing.Co we
						specialize in providing innovative IT Solutions and services
						tailored to meet your unique needs..
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
						src="./images/welcome.png"
						alt="Welcome Image"
						className="w-full"
					/>
				</div>
			</div>

			<div
				id="stats"
				className="bg-purple-600 p-6 rounded flex justify-evenly my-4 text-white">
				<div>
					<h3 className="text-2xl text-center font-semibold">50+</h3>
					<p>Registered Companies</p>
				</div>
				<div className="h-[60px] bg-white w-[3px]"></div>
				<div>
					<h3 className="text-2xl text-center font-semibold">10,000+</h3>
					<p>Satisfied Clients</p>
				</div>
				<div className="h-[60px] bg-white w-[3px]"></div>
				<div>
					<h3 className="text-2xl text-center font-semibold">500+</h3>
					<p>Professional Developers</p>
				</div>
				<div className="h-[60px] bg-white w-[3px]"></div>
				<div>
					<h3 className="text-2xl text-center font-semibold">24/7</h3>
					<p>Service Availability</p>
				</div>
			</div>

			<div id="about" className="flex justify-center my-16">
				<div className="flex justify-center items-end">
					<img
						src="./images/about.png"
						alt="Welcome Image"
						className="w-full"
					/>
				</div>
				<div className="p-4 flex flex-col justify-center ml-16">
					<div className="my-4">
						<h3 className="text-lg">We are here to help you</h3>
						<h1 className="text-3xl font-bold tracking-wide my-4">
							Get Started Today
						</h1>
					</div>
					<p className="my-3">
						Ready to take the first setp towards a more efficient and secure IT
						Infrostructure? Contact us today for a free consultation and let's
						discuss how freelancing.co can help your business to thrive in the
						digital age.
					</p>
					<div id="btnGroup" className="my-2">
						<button className="px-4 py-3 rounded-md bg-purple-600 text-white mr-4">
							Connect Now
						</button>
						<button className="px-4 py-3 rounded-md border-purple-600 border-2 mr-4">
							Learn more
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
