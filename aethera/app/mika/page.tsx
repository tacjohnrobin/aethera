"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink, Heart, Sparkles } from "lucide-react";

// Swiper imports for mobile carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function MikaPage() {
	const galleryImages = [
		"slide1.webp",
		"slide2.webp",
		"slide3.webp",
		"slide-main.webp",
	];

	return (
		<div className="bg-black pt-6 md:pt-12 pb-12 px-6 md:px-2 lg:px-16 min-h-screen text-purple-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Character Header */}
				<div className="grid md:grid-cols-2 gap-10 items-center">
					{/* Image with background blur */}
					<div className="relative w-full h-auto sm:w-[400px] sm:h-[500px] mx-auto">
						<div className="absolute inset-0 z-0 rounded-3xl overflow-hidden scale-110 blur-md">
							<Image
								src="/image/slide-main.webp"
								alt="Portrait of Mika Yumeno"
								fill
								className="object-cover"
							/>
						</div>
						<Image
							src="/image/slide-main.webp"
							alt="Portrait of Mika Yumeno"
							width={400}
							height={500}
							className="relative z-10 rounded-3xl object-cover w-full h-full shadow-2xl transition-transform duration-700 hover:scale-105"
						/>
					</div>

					{/* Text Section */}
					<div className="space-y-6">
						<div>
							<h1 className="text-4xl sm:text-4xl md:text-6xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
								Mika Yumeno
							</h1>
							<p className="text-lg sm:text-xl text-purple-200/80 font-light">
								The Dream Weaver
							</p>
						</div>

						<div className="text-base sm:text-sm leading-relaxed text-purple-100/90 space-y-4">
							<p>
								Born from the intersection of dreams and reality, Mika exists in
								the liminal space where memories take form. Her ethereal
								presence carries the weight of countless untold stories.
							</p>
							<p>
								In the quiet hours between sleep and waking, she weaves
								narratives that blur the boundaries of desire and imagination.
							</p>
						</div>

						{/* Voice Sample */}
						<Card className="p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30">
							<CardContent>
								<div className="flex flex-row items-start sm:items-center justify-between gap-4">
									<div>
										<h3 className="text-lg font-semibold text-purple-200 mb-1">
											Voice Sample
										</h3>
										<p className="text-sm text-purple-300/80">
											{'"Welcome to my world..."'}
										</p>
									</div>
									<Button
										size="sm"
										className="bg-purple-600 hover:bg-purple-700"
									>
										<Play className="w-4 h-4 mr-2" />
										Play
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Unlock Button */}
						<Link
							href="#"
							passHref
							className="flex items-center justify-center md:justify-start"
						>
							<Button className="w-fit sm:w-auto bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-6 px-8 rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300">
								<ExternalLink className="w-5 h-5 mr-1" />
								Unlock Mika on Fansly
							</Button>
						</Link>
					</div>
				</div>

				{/* Gallery Preview */}
				<section className="my-20">
					<h2 className="text-3xl font-serif text-purple-200 mb-8 text-center">
						Gallery Preview
					</h2>

					{/* Mobile Carousel */}
					<div className="block md:hidden">
						<Swiper
							spaceBetween={16}
							slidesPerView={1.2}
							loop={true}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
							pagination={{ clickable: true }}
							modules={[Pagination, Autoplay]}
							className="!pb-8"
						>
							{galleryImages.map((img, i) => (
								<SwiperSlide key={i}>
									<Card className="h-[20rem] group overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
										<CardContent className="p-0 relative">
											<div className="relative overflow-hidden h-full">
												<Image
													src={`/image/${img}`}
													alt={`Gallery Image ${i + 1}`}
													width={500}
													height={500}
													className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 filter blur-sm group-hover:blur-none"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
												{/* <div className="absolute inset-0 flex items-center justify-center">
													<Heart className="w-7 h-7 text-white/80 group-hover:scale-125 transition-transform duration-300" />
												</div>*/}
											</div>
										</CardContent>
									</Card>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					{/* Desktop Grid */}
					<div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{galleryImages.map((img, i) => (
							<Card
								key={i}
								className="p-0 h-[23rem] group overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-pink-900/30 hover:border-purple-400/40 transition-all duration-300"
							>
								<CardContent className="p-0 relative">
									<div className="relative overflow-hidden h-full">
										<Image
											src={`/image/${img}`}
											alt={`Gallery Image ${i + 1}`}
											width={500}
											height={500}
											className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 filter blur-sm group-hover:blur-none"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
										<div className="absolute inset-0 flex items-center justify-center">
											<Heart className="w-7 h-7 text-white/80 group-hover:scale-125 transition-transform duration-300" />
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Memory Capsules */}
				<section>
					<h2 className="text-3xl font-serif text-purple-200 mb-10 text-center">
						Upcoming Memory Capsules
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{[
							{
								title: "The First Whisper",
								status: "Available Now",
								color: "from-purple-600 to-pink-600",
							},
							{
								title: "Midnight Reverie",
								status: "Coming Soon",
								color: "from-indigo-600 to-purple-600",
							},
							{
								title: "Ethereal Embrace",
								status: "Q2 2024",
								color: "from-pink-600 to-purple-600",
							},
						].map((capsule, i) => (
							<Card
								key={i}
								className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 hover:border-purple-400/50 transition-transform hover:scale-105"
							>
								<CardContent className="p-6 text-center">
									<div
										className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${capsule.color} flex items-center justify-center`}
									>
										<Sparkles className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-xl font-serif text-purple-200 mb-1">
										{capsule.title}
									</h3>
									<p className="text-sm text-purple-300/80 mb-4">
										{capsule.status}
									</p>
									<Button
										variant="outline"
										size="sm"
										className="border-purple-400 text-purple-200 hover:bg-purple-800/50 bg-transparent"
									>
										Learn More
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
