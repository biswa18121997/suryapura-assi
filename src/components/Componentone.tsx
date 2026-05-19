import React from "react";
import { ArrowRight, PlayCircle, Trees, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const VillageHeroSection: React.FC = () => {
	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-[#eef7ef] via-[#f8fff8] to-[#dff1e4]">
			{/* Decorative Background */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						y: [0, -20, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 8,
					}}
					className="absolute top-10 left-10 w-52 h-52 bg-green-200/30 rounded-full blur-3xl"
				/>

				<motion.div
					animate={{
						y: [0, 20, 0],
					}}
					transition={{
						repeat: Infinity,
						duration: 7,
					}}
					className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl"
				/>
			</div>

			<div className="max-w-full mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10 bg-[url(/image_adb3c4bc.png)] bg-no-repeat bg-cover ">
				<div className="grid lg:grid-cols-2 gap-14 items-center">
					{/* LEFT CONTENT */}
					<motion.div
						initial={{ opacity: 0, x: -60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.9 }}
					>
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
							<Trees size={16} />
							Smart Village Development Mission
						</div>

						{/* Heading */}
						<h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
							Building{" "}
							<span className="text-yellow-700">Modern Villages</span> With
							Sustainable Development & Digital Governance
						</h1>

						{/* Description */}
						<p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
							Empowering rural communities through better infrastructure,
							transparent governance, clean environments, digital access,
							quality education, and sustainable employment opportunities for
							every household.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
							{[
								{
									number: "250+",
									title: "Villages Digitized",
								},
								{
									number: "98%",
									title: "Development Coverage",
								},
								{
									number: "120K+",
									title: "Citizens Benefited",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									whileHover={{ y: -6 }}
									className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl p-5 shadow-lg"
								>
									<h2 className="text-3xl font-bold text-green-700">
										{item.number}
									</h2>
									<p className="text-sm text-gray-600 mt-1">{item.title}</p>
								</motion.div>
							))}
						</div>

						{/* Buttons */}
						<div className="flex flex-wrap gap-4 mt-10">
							<button className="bg-green-700 hover:bg-green-800 transition-all text-white px-7 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-green-300/40">
								Explore Projects
								<ArrowRight size={18} />
							</button>

							<button className="bg-white hover:bg-gray-100 border border-gray-200 transition-all px-7 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-sm">
								<PlayCircle size={20} className="text-green-700" />
								Watch Overview
							</button>
						</div>
					</motion.div>

					{/* RIGHT CONTENT */}
					<motion.div
						initial={{ opacity: 0, x: 60 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
						className="relative"
					>
						{/* Main Image Card */}
						<div className="relative bg-white rounded-[35px] shadow-2xl overflow-hidden border border-green-100">
							{/* Top Ribbon */}
							<div className="absolute top-5 left-5 z-20 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
								Gram Pradhan Leadership
							</div>

							{/* Image */}
							<img
								src="panchayat-ending-explained-001.jpg"
								alt="Gram Pradhan"
								className="w-full h-[550px] object-cover"
							/>

							{/* Overlay Card */}
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.5 }}
								className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl"
							>
								<div className="flex items-start gap-4">
									<div className="bg-green-100 p-3 rounded-2xl">
										<Building2 className="text-green-700" size={28} />
									</div>

									<div>
										<h3 className="text-xl font-bold text-gray-900">
											Empowering Rural India
										</h3>

										<p className="text-gray-600 mt-2 leading-relaxed">
											“Together we are creating self-reliant villages with
											better roads, healthcare, sanitation, education, and
											digital empowerment for future generations.”
										</p>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Floating Cards */}
						<motion.div
							animate={{
								y: [0, -12, 0],
							}}
							transition={{
								repeat: Infinity,
								duration: 4,
							}}
							className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-green-100"
						>
							<h4 className="text-2xl font-bold text-green-700">85%</h4>
							<p className="text-sm text-gray-600">
								Rural Infrastructure Growth
							</p>
						</motion.div>

						<motion.div
							animate={{
								y: [0, 12, 0],
							}}
							transition={{
								repeat: Infinity,
								duration: 5,
							}}
							className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-green-100"
						>
							<h4 className="text-2xl font-bold text-green-700">24/7</h4>
							<p className="text-sm text-gray-600">
								Citizen Support & Monitoring
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default VillageHeroSection;
