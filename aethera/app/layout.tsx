import type { Metadata } from "next";
import {
	Poppins,
	Open_Sans,
	Nunito_Sans,
	Dancing_Script,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/wrap/navbar";
import { AgeVerification } from "@/components/custom/age-verifiction";
import { Footer } from "@/components/custom/footer";

// Load fonts and assign them to CSS variables
const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	display: "swap",
});

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	display: "swap",
});

const dancingScript = Dancing_Script({
	variable: "--font-cursive",
	subsets: ["latin"],
	display: "swap",
});

// Metadata for SEO & social previews
export const metadata: Metadata = {
	title: "Aethera",
	description: "A narrative-focused NSFW digital studio.",
	icons: {
		icon: "/icon/logo.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${poppins.variable} ${openSans.variable} ${nunitoSans.variable} ${dancingScript.variable} overflow-x-hidden`}
		>
			<body
				suppressHydrationWarning
				className="relative bg-gradient-to-br from-[#0C0D1F] via-[#3b0050] to-[#0C0D1F] text-white overflow-x-hidden font-poppins"
			>
				{/* Parallax Background Layer */}
				<div className="absolute inset-0 overflow-x-hidden pointer-events-none z-0">
					<div
						className="w-full h-full bg-repeat animate-stars"
						style={{
							backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 2px)`,
							backgroundSize: "25px 25px",
						}}
					/>
				</div>

				{/* Foreground Content */}
				<main className="relative z-10 w-full max-w-full overflow-hidden">
					<AgeVerification />
					<Navbar />
					{children}
					<div />
					<Footer />
					{/* Optional force scroll test */}
				</main>
			</body>
		</html>
	);
}
