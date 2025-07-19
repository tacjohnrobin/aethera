import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, ChevronDown } from "lucide-react";

export function FaqSection() {
	const faqs = [
		{
			question: "What is Studio Aethera?",
			answer:
				"Studio Aethera is a narrative-focused digital studio that creates immersive, story-driven content, including character profiles, memory capsules, and interactive experiences, all within an ethereal and sensual aesthetic.",
		},
		{
			question: "What are Memory Capsules?",
			answer:
				"Memory Capsules are unique content pieces that blend visual artistry with intimate storytelling. Each capsule is a fragment of a larger narrative, designed to offer a sensory experience and deepen your connection to our characters and worlds.",
		},
		{
			question: "How can I access exclusive content?",
			answer:
				"Exclusive content, including full memory capsules and premium visuals, is available through our Fansly premium subscription. You can find links to subscribe on our 'Join the Dream Chamber' page.",
		},
		{
			question: "What is the Dream Chamber?",
			answer:
				"The Dream Chamber is our official community hub, primarily hosted on Discord. It's a place for fans to connect, discuss lore, get behind-the-scenes updates, and participate in exclusive events with Mika and the studio.",
		},
		{
			question: "How often is new content released?",
			answer:
				"We regularly release new memory capsules and introduce new characters. You can check our 'Coming Soon & Roadmap' page for the latest updates on our release schedule and upcoming projects.",
		},
		{
			question: "Is Studio Aethera content suitable for all ages?",
			answer:
				"No, content from Studio Aethera is intended for adult audiences only. We require age verification upon entry to the website, and all content is designed for individuals 18 years of age or older.",
		},
	];

	return (
		<section className="px-4 ">
			<div className=" mx-auto">
				<div className="text-center mb-12">
					<Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
					<h2 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-lg text-purple-200/80 max-w-2xl mx-auto">
						Find answers to common questions about Studio Aethera, our content,
						and how to join our community.
					</p>
				</div>

				<Accordion type="single" collapsible className="space-y-2">
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="rounded-md py-4 bg-[#1c1c2a] border border-purple-700/30 overflow-hidden"
						>
							<AccordionTrigger className="flex items-center justify-between w-full text-left px-4 py-3 text-purple-100 hover:text-purple-50 font-medium transition-colors">
								<span>{faq.question}</span>
							</AccordionTrigger>
							<AccordionContent className="px-4 pb-4 text-sm text-purple-300/90 leading-relaxed">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}
