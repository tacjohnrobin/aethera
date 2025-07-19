import CapsuleCard from "@/components/custom/capsule-card";
import DreamChamberSection from "@/components/custom/dreamsection";
import { FaqSection } from "@/components/custom/faq-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/wrap/navbar";
import capsulesData from "@/data/capsules.json";
import { Sparkles, Heart, BookOpen, MessageCircle, Mail } from "lucide-react";

interface Capsule {
	id: string;
	name: string;
	age: number;
	profession: string;
	traits: string[];
	image: string;
	title: string;
	teaser: string;
	emotion: string;
	theme: string;
	isNew: boolean;
	ppvLink: string;
}

export default function Home() {
	return (
		<div className="w-full overflow-x-hidden">
			<main className="px-4 sm:px-6 lg:px-24 py-6 ">
				{/* Hero Section */}
				<section className="w-full relative mx-auto rounded-2xl my-4 py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-24 bg-[url('/image/mika.png')] bg-cover bg-left bg-no-repeat">
					<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
						{/* Left Placeholder */}
						<div className="relative h-[150px] sm:h-[200px]"></div>

						{/* Right Text Content */}
						<div className="space-y-6 text-center md:text-left animate-fade-in">
							<h1 className="text-3xl sm:text-4xl font-serif font-semibold leading-tight text-white">
								Ethereal Worlds <br />
								<span className="text-purple-400">Tangible Desire</span>
							</h1>
							<p className="text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0 hidden lg:block">
								Where dreams take form and memories become reality. Step into a
								realm where every story whispers secrets of the heart.
							</p>

							{/* Call to Action */}
							<div className="pt-4">
								<a href="/generate">
									<Button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/25">
										Get Started
									</Button>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Capsules Section */}
				<section className="pt-10">
					<div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
						{capsulesData.map((capsule) => (
							<CapsuleCard key={capsule.id} capsule={capsule as Capsule} />
						))}
					</div>
				</section>
				<section>
					<DreamChamberSection />
				</section>
				<section className="py-20 px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-8">
							The Studio Aethera Experience
						</h2>

						<div className="prose prose-lg prose-purple max-w-none mb-12">
							<p className="text-purple-200/90 leading-relaxed text-lg mb-6">
								Studio Aethera exists in the liminal space between dreams and
								reality, where digital artistry meets intimate storytelling. We
								craft experiences that transcend traditional boundaries,
								creating worlds where desire takes form and memories become
								tangible.
							</p>
							<p className="text-purple-200/90 leading-relaxed text-lg">
								Every creation is born from the belief that the most profound
								connections happen in the spaces between—between sleep and
								waking, between fantasy and reality, between the ethereal and
								the tangible.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 mb-12">
							<div className="text-center">
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
									<BookOpen className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-serif text-purple-200 mb-3">
									Narrative Artistry
								</h3>
								<p className="text-purple-300/80 text-sm">
									Every story is crafted with meticulous attention to emotional
									depth and sensual detail.
								</p>
							</div>

							<div className="text-center">
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
									<Heart className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-serif text-indigo-200 mb-3">
									Intimate Connection
								</h3>
								<p className="text-indigo-300/80 text-sm">
									We believe in creating genuine connections that transcend the
									digital realm.
								</p>
							</div>

							<div className="text-center">
								<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
									<Sparkles className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-serif text-pink-200 mb-3">
									Ethereal Worlds
								</h3>
								<p className="text-pink-300/80 text-sm">
									Each universe we create is designed to feel more real than
									reality itself.
								</p>
							</div>
						</div>

						<a href="/about">
							<Button
								variant="outline"
								className="border-purple-400 text-purple-200 hover:bg-purple-800/50 bg-transparent px-8 py-3"
							>
								Discover Our Story
							</Button>
						</a>
					</div>
				</section>

				{/* Newsletter Signup (already present, but keeping for context) */}
				<section className="py-16 px-4 mt-24 relative">
					{/* Bottom absolute image */}
					<div className="absolute bottom-0 right-0 z-0 opacity-40">
						<img
							src="/image/pic1.png"
							alt="Bottom Decoration"
							className="w-[200px] h-[200px] object-contain"
						/>
					</div>

					{/* Gradient border container */}
					<div className="max-w-5xl mx-auto p-1 bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 rounded-xl z-10 relative">
						{/* Flex container: Left is content, right is image */}
						<div className="flex flex-col md:flex-row items-center bg-black rounded-lg overflow-hidden">
							{/* Card Content */}
							<Card className="bg-black w-full md:w-2/3">
								<CardContent className="p-6 text-center md:text-left">
									<h3 className="text-2xl font-semibold text-white mb-4">
										Be the First to Remember
									</h3>
									<p className="text-gray-400 mb-6">
										Join our circle for exclusive previews, early access, and
										intimate updates from the ethereal realm.
									</p>

									<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
										<input
											type="email"
											placeholder="Enter your email"
											className="flex-1 px-4 py-3 bg-neutral-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
										/>
										<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-6 text-white">
											Subscribe
										</Button>
									</div>

									<p className="text-gray-500 text-xs mt-4">
										We respect your privacy. Unsubscribe anytime.
									</p>
								</CardContent>
							</Card>

							{/* Right-side image */}
							<div className="md:w-1/3 p-4 flex justify-center items-center">
								<img
									src="/image/pic1.png"
									alt="Newsletter Preview"
									className="w-full max-w-[450px] h-auto rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</section>

				<FaqSection />
			</main>
		</div>
	);
}
