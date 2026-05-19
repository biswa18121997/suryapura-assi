import React from "react";
import {
	Bell,
	Search,
	ChevronDown,
	Menu,
	User,
	Home,
} from "lucide-react";

const GovtNavbar: React.FC = () => {
	return (
		<div className="w-full shadow-md font-sans">
			{/* TOP HEADER */}
			<div className="bg-[#4b4b8f] text-white text-[12px] px-4 py-1 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span>Government of Suryapura</span>
				</div>

				<div className="flex items-center gap-4">
					<button className="hover:text-gray-200">Skip to main content</button>
					<button className="hover:text-gray-200">
						Screen Reader Access
					</button>
					<Bell size={14} />
				</div>
			</div>

			{/* MIDDLE HEADER */}
			<div className="bg-white border-b border-gray-300 px-4 py-3">
				<div className="max-w-[1400px] mx-auto flex items-center justify-between flex-wrap gap-4">
					{/* LEFT SECTION */}
					<div className="flex items-center gap-4">
						{/* Logo */}
						<div className="w-[65px] h-[65px] rounded-full border overflow-hidden">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
								alt="logo"
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Title */}
						<div>
							<h1 className="text-[22px] font-bold text-[#1d1d1d] leading-tight">
								SURYAPURA GRAM VIKAS PORTAL
							</h1>

							<p className="text-[13px] text-green-700 font-semibold">
								Ministry of Panchayati Raj
							</p>

							<p className="text-[12px] text-gray-600">
								Government of Suryapura
							</p>
						</div>
					</div>

					{/* RIGHT SECTION */}
					<div className="flex items-center gap-3">
						{/* Gandhi Image */}
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
							alt="gandhi"
							className="w-[60px] h-[60px] rounded-full object-cover border"
						/>

						{/* Login */}
						<button className="bg-[#1b5e20] hover:bg-[#14461a] transition text-white px-4 py-2 rounded-md flex items-center gap-2">
							<User size={16} />
							Login
						</button>
					</div>
				</div>
			</div>

			{/* MAIN NAVBAR */}
			<div className="bg-[#0f4c3a] text-white border-t border-green-900">
				<div className="max-w-[1400px] mx-auto flex items-center justify-between px-4">
					{/* LEFT NAV ITEMS */}
					<div className="hidden lg:flex items-center">
						{[
							"Home",
							"About",
							"Reports",
							"Planning",
							"Directory",
							"Training",
							"Gallery",
							"Contact",
						].map((item, index) => (
							<button
								key={index}
								className="px-5 py-3 hover:bg-[#17634c] transition text-[14px] border-r border-green-800"
							>
								<div className="flex items-center gap-1">
									{item}
									<ChevronDown size={14} />
								</div>
							</button>
						))}
					</div>

					{/* RIGHT ACTIONS */}
					<div className="flex items-center gap-2 py-2">
						{/* Search */}
						<div className="hidden md:flex items-center bg-white rounded overflow-hidden">
							<input
								type="text"
								placeholder="Search..."
								className="px-3 py-2 text-black outline-none text-sm w-[220px]"
							/>
							<button className="bg-[#e8e8e8] px-3 py-2 hover:bg-gray-300">
								<Search size={16} className="text-black" />
							</button>
						</div>

						{/* Mobile Menu */}
						<button className="lg:hidden p-2 hover:bg-[#17634c] rounded">
							<Menu size={22} />
						</button>
					</div>
				</div>
			</div>

			{/* SUB NAVIGATION */}
			<div className="bg-[#f5f5f5] border-b border-gray-300">
				<div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center gap-6 overflow-x-auto whitespace-nowrap text-[13px]">
					<button className="text-[#0f4c3a] font-semibold flex items-center gap-1">
						<Home size={14} />
						Dashboard
					</button>

					<button className="hover:text-[#0f4c3a]">
						State Reports
					</button>

					<button className="hover:text-[#0f4c3a]">
						District Planning
					</button>

					<button className="hover:text-[#0f4c3a]">
						Monitoring
					</button>

					<button className="hover:text-[#0f4c3a]">
						Analytics
					</button>

					<button className="hover:text-[#0f4c3a]">
						User Manuals
					</button>
				</div>
			</div>
		</div>
	);
};

export default GovtNavbar;
