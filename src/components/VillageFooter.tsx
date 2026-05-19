import React from "react";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaArrowUp,
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from "react-icons/fa";

const VillageFooter: React.FC = () => {
	return (
		<footer className="bg-[#0b2f24] text-white relative overflow-hidden">
			{/* Top Glow */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

			{/* Main Footer */}
			<div className="max-w-[1450px] mx-auto px-6 lg:px-10 py-16 relative z-10">
				<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
					{/* About */}
					<div>
						<div className="flex items-center gap-3 mb-5">
							<div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-2xl font-bold shadow-lg">
								S
							</div>

							<div>
								<h2 className="text-2xl font-extrabold">
									Suryapura Gram
								</h2>

								<p className="text-green-200 text-sm">
									Digital Village Portal
								</p>
							</div>
						</div>

						<p className="text-gray-300 leading-relaxed">
							Empowering rural communities through digital governance,
							education, infrastructure development, farmer support,
							transparent पंचायत services, and sustainable village growth.
						</p>

						{/* Social */}
						<div className="flex items-center gap-4 mt-7">
							{[
								FaFacebookF,
								FaInstagram,
								FaTwitter,
								FaYoutube,
							].map((Icon, index) => (
								<button
									key={index}
									className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
								>
									<Icon size={18} />
								</button>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-bold mb-6">
							Quick Links
						</h3>

						<div className="space-y-4">
							{[
								"गांव का विकास",
								"शिक्षा अभियान",
								"किसान सहायता",
								"सड़क परियोजना",
								"पंचायत सेवाएं",
								"डिजिटल पहचान",
							].map((item, index) => (
								<button
									key={index}
									className="flex items-center gap-2 text-gray-300 hover:text-green-300 transition group"
								>
									<FaArrowUp
										size={12}
										className="rotate-45 group-hover:translate-x-1 transition"
									/>
									{item}
								</button>
							))}
						</div>
					</div>

					{/* Development Stats */}
					<div>
						<h3 className="text-xl font-bold mb-6">
							Village Progress
						</h3>

						<div className="space-y-5">
							{[
								{
									title: "Road Development",
									value: "96%",
								},
								{
									title: "Digital Literacy",
									value: "82%",
								},
								{
									title: "School Modernization",
									value: "91%",
								},
								{
									title: "Farmer Welfare",
									value: "88%",
								},
							].map((item, index) => (
								<div key={index}>
									<div className="flex items-center justify-between mb-2">
										<span className="text-gray-300 text-sm">
											{item.title}
										</span>

										<span className="text-green-300 font-bold">
											{item.value}
										</span>
									</div>

									<div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
											style={{
												width: item.value,
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-xl font-bold mb-6">
							Contact Information
						</h3>

						<div className="space-y-5">
							<div className="flex items-start gap-4">
								<div className="w-11 h-11 rounded-xl bg-green-600/20 flex items-center justify-center">
									<FaMapMarkerAlt
										size={18}
										className="text-green-300"
									/>
								</div>

								<div>
									<h4 className="font-semibold">
										Panchayat Office
									</h4>

									<p className="text-gray-300 text-sm mt-1 leading-relaxed">
										Suryapura Gram Panchayat,
										<br />
										Rural Development Block,
										<br />
										India
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-11 h-11 rounded-xl bg-green-600/20 flex items-center justify-center">
									<FaPhoneAlt
										size={16}
										className="text-green-300"
									/>
								</div>

								<div>
									<h4 className="font-semibold">
										Helpline
									</h4>

									<p className="text-gray-300 text-sm">
										+91 98765 43210
									</p>
								</div>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-11 h-11 rounded-xl bg-green-600/20 flex items-center justify-center">
									<FaEnvelope
										size={16}
										className="text-green-300"
									/>
								</div>

								<div>
									<h4 className="font-semibold">
										Email Support
									</h4>

									<p className="text-gray-300 text-sm">
										support@suryapuragram.in
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="h-[1px] bg-white/10 my-10" />

				{/* Bottom */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-5">
					<p className="text-gray-400 text-sm text-center lg:text-left">
						© 2026 Suryapura Gram Panchayat. All rights reserved.
					</p>

					<div className="flex items-center gap-6 text-sm text-gray-400">
						<button className="hover:text-green-300 transition">
							Privacy Policy
						</button>

						<button className="hover:text-green-300 transition">
							Terms & Conditions
						</button>

						<button className="hover:text-green-300 transition">
							Citizen Support
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default VillageFooter;
