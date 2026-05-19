import React from "react";
import {
	Heart,
	MessageCircle,
	Share2,
	Bookmark,
	MoreHorizontal,
	BadgeCheck,
	MapPin,
	TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const posts = [
	{
		id: 1,
		author: "Suryapura Gram Panchayat",
		username: "@suryapura_official",
		verified: true,
		profile:
			"Suryapura-Block.jpg",
		image:
			"images.jpeg",
		caption:
			"🚜 किसानों के लिए नई सिंचाई योजना का कार्य तेजी से चल रहा है। गाँव के खेतों तक बेहतर पानी पहुँचाने के लिए पाइपलाइन और जल संरचना विकसित की जा रही है। #किसान #गांव_का_विकास",
		likes: "12.4K",
		comments: "1.2K",
		shares: "840",
		category: "किसान विकास",
		progress: "78% Completed",
	},
	{
		id: 2,
		author: "Pradhan - Ravi Pratap Singh",
		username: "@pradhan_suryapura",
		verified: true,
		profile:
			"image_adb3c4bc.png",
		image:
			"schoolcollage.jpeg",
		caption:
			"🏫 सुर्यापुरा ग्राम में नए स्मार्ट क्लासरूम और डिजिटल शिक्षा केंद्र का उद्घाटन किया गया। बच्चों को आधुनिक शिक्षा और कंप्यूटर सुविधा उपलब्ध कराई जा रही है। #शिक्षा #डिजिटल_पहचान",
		likes: "18.9K",
		comments: "2.4K",
		shares: "1.1K",
		category: "शिक्षा मिशन",
		progress: "92% Completed",
	},
	{
		id: 3,
		author: "Suryapura Development Team",
		username: "@develop_suryapura",
		verified: true,
		profile:
			"https://randomuser.me/api/portraits/women/42.jpg",
		image:
			"pmgsy.jpeg",
		caption:
			"🛣️ पंचायत द्वारा मुख्य सड़क निर्माण कार्य लगभग पूरा हो चुका है। इससे गाँव के लोगों को बेहतर परिवहन सुविधा मिलेगी और व्यापार को भी बढ़ावा मिलेगा। #सड़क #पंचायत #गांव_का_विकास",
		likes: "22.7K",
		comments: "3.2K",
		shares: "1.8K",
		category: "सड़क परियोजना",
		progress: "96% Completed",
	},
];

const SocialVillageFeed: React.FC = () => {
	return (
		<section className="bg-[#f3f7f4] py-24 relative overflow-hidden">
			{/* Background Blur */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-0 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl" />
			</div>

			<div className="max-w-[1450px] mx-auto px-5 lg:px-10 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 35 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">
						<TrendingUp size={16} />
						Suryapura Gram Social Updates
					</div>

					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
						Digital Village Community Feed
					</h2>

					<p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
						पंचायत, शिक्षा, किसान, सड़क और डिजिटल पहचान से जुड़े विकास कार्यों
						की लाइव अपडेट्स सीधे सुर्यापुरा ग्राम और ग्राम प्रधान द्वारा।
					</p>
				</motion.div>

				{/* Feed Layout */}
				<div className="grid lg:grid-cols-3 gap-10">
					{posts.map((post, index) => (
						<motion.div
							key={post.id}
							initial={{ opacity: 0, y: 45 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.7,
								delay: index * 0.08,
							}}
							viewport={{ once: true }}
							whileHover={{
								y: -8,
							}}
							className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100"
						>
							{/* Post Header */}
							<div className="flex items-center justify-between p-5">
								<div className="flex items-center gap-4">
									<img
										src={post.profile}
										alt={post.author}
										className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
									/>

									<div>
										<div className="flex items-center gap-1">
											<h3 className="font-bold text-gray-900">
												{post.author}
											</h3>

											{post.verified && (
												<BadgeCheck
													size={18}
													className="text-blue-500 fill-blue-500"
												/>
											)}
										</div>

										<p className="text-sm text-gray-500">
											{post.username}
										</p>

										<div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
											<MapPin size={12} />
											Suryapura Gram
										</div>
									</div>
								</div>

								<button className="text-gray-500 hover:text-black transition">
									<MoreHorizontal />
								</button>
							</div>

							{/* Image */}
							<div className="relative">
								<img
									src={post.image}
									alt="development"
									className="w-full h-[340px] object-cover"
								/>

								{/* Category Badge */}
								<div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
									{post.category}
								</div>

								{/* Progress Card */}
								<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg">
									<p className="text-xs text-gray-500">
										Project Status
									</p>

									<h4 className="text-lg font-bold text-green-700">
										{post.progress}
									</h4>
								</div>
							</div>

							{/* Post Body */}
							<div className="p-6">
								<p className="text-gray-700 leading-relaxed text-[15px]">
									{post.caption}
								</p>

								{/* Stats */}
								<div className="flex items-center justify-between mt-6 text-sm text-gray-500">
									<span>{post.likes} Likes</span>
									<span>{post.comments} Comments</span>
									<span>{post.shares} Shares</span>
								</div>

								{/* Divider */}
								<div className="h-[1px] bg-gray-100 my-5" />

								{/* Actions */}
								<div className="flex items-center justify-between">
									<button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition font-medium">
										<Heart size={20} />
										Like
									</button>

									<button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-medium">
										<MessageCircle size={20} />
										Comment
									</button>

									<button className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition font-medium">
										<Share2 size={20} />
										Share
									</button>

									<button className="text-gray-600 hover:text-black transition">
										<Bookmark size={20} />
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Bottom Highlight */}
				<motion.div
					initial={{ opacity: 0, y: 35 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="mt-20 bg-gradient-to-r from-[#0f4c3a] to-[#16634f] rounded-[35px] p-10 lg:p-14 shadow-2xl text-white"
				>
					<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
						<div>
							<h2 className="text-4xl font-extrabold">
								Surayapura Gram Digital Mission
							</h2>

							<p className="mt-4 text-green-100 text-lg max-w-3xl leading-relaxed">
								गाँव का विकास अब डिजिटल माध्यम से हर नागरिक तक पहुँच रहा है।
								पंचायत, शिक्षा, किसान और सड़क विकास की हर प्रगति अब पारदर्शी
								और लाइव है।
							</p>
						</div>

						<button className="bg-white text-green-800 hover:bg-green-50 transition px-8 py-4 rounded-2xl font-bold shadow-lg whitespace-nowrap">
							View All Posts
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default SocialVillageFeed;
