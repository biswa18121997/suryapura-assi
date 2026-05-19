import React from "react";
import {
	Road,
	School,
	Trees,
	Droplets,
	Wifi,
	Building2,
	HeartPulse,
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
	{
		title: "Road Construction",
		value: "128 KM",
		progress: 82,
		icon: Road,
		color: "from-green-500 to-emerald-600",
	},
	{
		title: "Schools Developed",
		value: "46",
		progress: 74,
		icon: School,
		color: "from-blue-500 to-cyan-600",
	},
	{
		title: "Water Supply Projects",
		value: "92%",
		progress: 92,
		icon: Droplets,
		color: "from-sky-500 to-blue-600",
	},
	{
		title: "Digital Connectivity",
		value: "68%",
		progress: 68,
		icon: Wifi,
		color: "from-violet-500 to-purple-600",
	},
	{
		title: "Healthcare Centers",
		value: "21",
		progress: 58,
		icon: HeartPulse,
		color: "from-rose-500 to-pink-600",
	},
	{
		title: "Green Plantation",
		value: "18K Trees",
		progress: 88,
		icon: Trees,
		color: "from-lime-500 to-green-600",
	},
];

const VillageDevelopmentMetrics: React.FC = () => {
	return (
		<section className="relative bg-[#f5f9f6] py-20 overflow-hidden">
			{/* Background Glow */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 35 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">
						<Building2 size={16} />
						Live Village Development Status
					</div>

					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
						Real-Time Rural Progress Metrics
					</h2>

					<p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-relaxed">
						Tracking the transformation of villages through infrastructure,
						education, healthcare, digital services, sustainability, and public
						welfare initiatives.
					</p>
				</motion.div>

				{/* Metrics Grid */}
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
					{metrics.map((metric, index) => {
						const Icon = metric.icon;

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 45 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: index * 0.08,
								}}
								viewport={{ once: true }}
								whileHover={{
									y: -8,
									scale: 1.02,
								}}
								className="group relative bg-white rounded-[28px] border border-gray-100 shadow-xl overflow-hidden"
							>
								{/* Gradient Strip */}
								<div
									className={`h-2 w-full bg-gradient-to-r ${metric.color}`}
								/>

								<div className="p-7">
									{/* Top */}
									<div className="flex items-start justify-between">
										<div>
											<p className="text-gray-500 text-sm font-medium">
												{metric.title}
											</p>

											<motion.h3
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{
													delay: 0.2,
													duration: 0.8,
												}}
												className="text-4xl font-extrabold text-gray-900 mt-3"
											>
												{metric.value}
											</motion.h3>
										</div>

										<div
											className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}
										>
											<Icon className="text-white" size={30} />
										</div>
									</div>

									{/* Progress */}
									<div className="mt-8">
										<div className="flex justify-between items-center mb-2">
											<span className="text-sm text-gray-500">
												Completion Status
											</span>

											<span className="text-sm font-bold text-gray-700">
												{metric.progress}%
											</span>
										</div>

										<div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
											<motion.div
												initial={{ width: 0 }}
												whileInView={{
													width: `${metric.progress}%`,
												}}
												transition={{
													duration: 1.2,
													ease: "easeOut",
												}}
												viewport={{ once: true }}
												className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
											/>
										</div>
									</div>

									{/* Footer */}
									<div className="mt-6 flex items-center justify-between">
										<span className="text-sm text-gray-500">
											Updated just now
										</span>

										<button className="text-sm font-semibold text-green-700 hover:text-green-800 transition">
											View Details →
										</button>
									</div>
								</div>

								{/* Floating Glow */}
								<div
									className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-3xl bg-gradient-to-br ${metric.color}`}
								/>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom Stats */}
				<motion.div
					initial={{ opacity: 0, y: 35 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="mt-20 bg-gradient-to-r from-[#0f4c3a] to-[#16634f] rounded-[35px] p-10 text-white shadow-2xl"
				>
					<div className="grid md:grid-cols-4 gap-10 text-center">
						{[
							{
								number: "540+",
								label: "Projects Running",
							},
							{
								number: "12K+",
								label: "Families Benefited",
							},
							{
								number: "96%",
								label: "Citizen Satisfaction",
							},
							{
								number: "24/7",
								label: "Monitoring System",
							},
						].map((item, index) => (
							<div key={index}>
								<h2 className="text-4xl font-extrabold">{item.number}</h2>
								<p className="mt-2 text-green-100">{item.label}</p>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default VillageDevelopmentMetrics;
