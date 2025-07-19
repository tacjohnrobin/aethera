import Link from "next/link";
import { Sparkles, Twitter, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
	return (
		<footer className="bg-black/40 backdrop-blur-md border-t border-purple-500/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Studio Info */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<Sparkles className="w-6 h-6 text-purple-400" />
							<span className="text-lg font-serif text-purple-200">
								Studio Aethera
							</span>
						</div>
						<p className="text-purple-300/80 mb-4 max-w-md">
							Where ethereal worlds meet tangible desire. Enter a realm of
							dreams, memories, and infinite possibilities.
						</p>
						<p className="text-purple-400 text-sm">contact@studioaethera.com</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-purple-200 font-semibold mb-4">Explore</h3>
						<div className="space-y-2">
							<Link
								href="/character/mika"
								className="block text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								Meet Mika
							</Link>
							<Link
								href="/capsules"
								className="block text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								Memory Capsules
							</Link>
							<Link
								href="/dream-chamber"
								className="block text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								Dream Chamber
							</Link>
							<Link
								href="/roadmap"
								className="block text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								Roadmap
							</Link>
						</div>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="text-purple-200 font-semibold mb-4">Connect</h3>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								<Instagram className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-purple-300/80 hover:text-purple-200 transition-colors"
							>
								<MessageCircle className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
					<p className="text-purple-400/60 text-sm">
						© {new Date().getFullYear()} Studio Aethera. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 sm:mt-0">
						<Link
							href="/terms"
							className="text-purple-400/60 hover:text-purple-300 text-sm transition-colors"
						>
							Terms
						</Link>
						<Link
							href="/privacy"
							className="text-purple-400/60 hover:text-purple-300 text-sm transition-colors"
						>
							Privacy
						</Link>
						{/* Updated 18+ Disclaimer */}
						<span className="text-red-400/80 text-sm font-semibold">
							18+ Content
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
