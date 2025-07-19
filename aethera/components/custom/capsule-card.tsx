import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Plus, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

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

interface CapsuleCardProps {
	capsule: Capsule;
}

export default function CapsuleCard({ capsule }: CapsuleCardProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className={cn(
						"relative overflow-hidden rounded-xl shadow-lg group cursor-pointer",
						"bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-0.5",
					)}
				>
					<div className="relative h-60 sm:h-[80px] lg:h-[30rem] w-full overflow-hidden rounded-xl">
						<Image
							src={capsule.image || "/placeholder.svg"}
							alt={capsule.name}
							width={400}
							height={300}
							className="object-cover w-full h-full filter blur-lg group-hover:blur-none transition-all duration-300"
						/>

						{capsule.isNew && (
							<div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-medium p-2 rounded-full flex items-center gap-1">
								<Plus className="w-4 h-4" /> New
							</div>
						)}
						<div className="absolute top-3 right-3 bg-gray-800/70 p-2 rounded-full">
							<MessageCircle className="w-6 h-6 text-white" />
						</div>

						<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
							<div className="flex items-center justify-between text-white">
								<h4 className="text-lg sm:text-xl font-bold">{capsule.name}</h4>
								<span className="text-xs sm:text-sm text-gray-300">
									{capsule.age} years
								</span>
							</div>
							<div className="flex items-center text-gray-300 text-xs sm:text-sm mt-1">
								<span className="mr-2">💼</span> {capsule.profession}
							</div>
							<div className="flex items-center text-gray-300 text-xs sm:text-sm mt-1">
								<span className="mr-2">👤</span> {capsule.traits.join(", ")}
							</div>
						</div>
					</div>
				</div>
			</DialogTrigger>

			<DialogContent
				className={cn(
					"sm:max-w-[450px] w-full max-h-[90vh] overflow-hidden rounded-2xl p-0 bg-black z-50",
				)}
			>
				<div className="relative w-full h-[500px]">
					<Image
						src={capsule.image || "/placeholder.svg"}
						alt={capsule.name}
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0  overflow-hidden">
						{/* Optional: Add a subtle overlay or effect here */}
					</div>
					{/* Gradient overlay with content */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-black/50 p-6 text-white">
						<div className="flex items-center justify-between">
							<h4 className="text-lg sm:text-xl font-bold">{capsule.name}</h4>
							<span className="text-xs sm:text-sm text-gray-300">
								{capsule.age} years
							</span>
						</div>

						<DialogTitle className="text-2xl font-bold mt-2">
							{capsule.title}
						</DialogTitle>
						<DialogDescription className="text-sm text-gray-300 mb-4">
							{capsule.teaser}
						</DialogDescription>

						<Link
							href={capsule.ppvLink}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full flex items-center justify-center"
						>
							<Button className="w-fit px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-full gap-2 text-sm">
								<ExternalLink className="w-4 h-4" /> Unlock on Fansly
							</Button>
						</Link>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
