"use client";

import Image from "next/image";

export default function DreamChamberSection() {
	return (
		<section className="px-4 sm:px-8 py-20">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* LEFT: Character + Chat */}
				<div className="relative border border-gray-700 rounded-xl bg-[#2a2a2d] px-6 py-12 overflow-visible">
					{/* Circular thumbnails 
					<div className="absolute top-4 left-10 w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
						<Image src="/thumb1.jpg" alt="Thumb 1" width={48} height={48} />
					</div>
					<div className="absolute top-4 right-10 w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
						<Image src="/thumb2.jpg" alt="Thumb 2" width={48} height={48} />
					</div>
					<div className="absolute bottom-10 right-6 w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
						<Image src="/thumb3.jpg" alt="Thumb 3" width={48} height={48} />
					</div>*/}

					{/* Central image */}
					<div className="relative z-10 -mt-30 flex justify-center">
						<Image
							src="/image/main-character.png"
							alt="Main Character"
							width={550}
							height={520}
							className="object-contain drop-shadow-2xl"
						/>
					</div>

					{/* Discord-style chat */}
					<div className="absolute bottom-[-80px] left-6 space-y-2 z-20 max-w-md w-[320px]">
						<div className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-2 rounded-xl text-white shadow-lg">
							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-pink-500 text-white font-bold rounded-full flex items-center justify-center text-sm">
									M
								</div>
								<div className="flex flex-col">
									<span className="text-sm">
										New capsule preview dropping soon... ✨
									</span>
									<span className="text-xs text-white/70">
										Mika • 2 minutes ago
									</span>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-r from-[#373b44] to-[#4286f4] p-4 rounded-xl text-white shadow-lg">
							<div className="flex items-center space-x-3">
								<div className="w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-sm">
									D
								</div>
								<div className="flex flex-col">
									<span className="text-sm">
										The latest capsule was absolutely ethereal! 💜
									</span>
									<span className="text-xs text-white/70">
										Dreamer • 5 minutes ago
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT: Dream Chamber Content */}
				<div className="text-white mt-24 md:mt-0">
					<h2 className="text-3xl font-bold mb-4">Enter the Dream Chamber</h2>
					<p className="text-gray-300 mb-6">
						Join our exclusive community where dreams and reality intertwine.
						Connect with fellow dreamers, unlock exclusive content, and be part
						of the ethereal journey. Your path to deeper immersion begins here.
					</p>
					<ul className="list-disc list-inside text-gray-300 space-y-2 mb-8">
						<li>Connect with a vibrant community of fans.</li>
						<li>Gain early access to new capsules and characters.</li>
						<li>Participate in exclusive events and discussions.</li>
					</ul>
					<div className="flex flex-wrap gap-4">
						<button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
							Join the Dream Chamber
						</button>
						<button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition">
							Explore Capsules
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
