"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface FilterControlsProps {
	characters: string[];
	emotions: string[];
	themes: string[];
	onFilterChange: (
		type: "character" | "emotion" | "theme",
		value: string,
	) => void;
	selectedFilters: {
		character: string;
		emotion: string;
		theme: string;
	};
}

export default function FilterControls({
	characters,
	emotions,
	themes,
	onFilterChange,
	selectedFilters,
}: FilterControlsProps) {
	return (
		<div className="flex flex-wrap gap-4 mb-8 justify-center">
			<Select
				onValueChange={(value) => onFilterChange("character", value)}
				value={selectedFilters.character}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Filter by Character" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Characters</SelectItem>
					{characters.map((char) => (
						<SelectItem key={char} value={char}>
							{char}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Select
				onValueChange={(value) => onFilterChange("emotion", value)}
				value={selectedFilters.emotion}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Filter by Emotion" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Emotions</SelectItem>
					{emotions.map((emotion) => (
						<SelectItem key={emotion} value={emotion}>
							{emotion}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<Select
				onValueChange={(value) => onFilterChange("theme", value)}
				value={selectedFilters.theme}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Filter by Theme" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">All Themes</SelectItem>
					{themes.map((theme) => (
						<SelectItem key={theme} value={theme}>
							{theme}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
