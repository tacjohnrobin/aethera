"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(!isOpen);
	const closeSidebar = () => setIsOpen(false);

	return (
		<>
			<nav className="w-full border-b border-slate-700 bg-[#111026] z-50 relative ">
				<div className="flex items-center justify-between h-16 px-4 md:px-6">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<Image
							src="/icon/girl.svg"
							alt="Logo"
							width={30}
							height={30}
							className="rounded-full"
						/>
						<span className="text-white font-semibold text-sm">
							Aether Studio
						</span>
					</div>

					{/* Hamburger for mobile */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							size="icon"
							className="text-white"
							onClick={toggleSidebar}
						>
							{isOpen ? <X /> : <Menu />}
						</Button>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center justify-between w-full m-4 rounded-full">
						<div className="flex items-center space-x-2 bg-[#111026] p-1 rounded-lg backdrop-blur-md">
							<NavItem key="home" href="/" icon="/icon/girl.svg" label="Home" />
							<NavItem
								key="hentai"
								href="/mika"
								icon="/icon/anime.svg"
								label="Meet Mika!"
							/>
							<NavItem
								key="boyfriend"
								href="/boyfriend"
								icon="/icon/male.svg"
								label="Capsules"
							/>
						</div>

						<div className="flex items-center space-x-4">
							<Link href="/capsules-signup">
								<Button className="bg-pink-600 hover:bg-pink-700 text-white px-6">
									Sign Up for Capsules
								</Button>
							</Link>
							<Link href="/login">
								<Button
									variant="ghost"
									className="text-white hover:text-slate-300 px-6 hover:bg-slate-800"
								>
									Login
								</Button>
							</Link>
							<Link href="/register">
								<Button className="bg-purple-600 px-6 hover:bg-purple-700 text-white">
									Register
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Sidebar Overlay */}
			<div
				className={clsx(
					"fixed inset-0 z-40 transition-opacity duration-300 md:hidden",
					isOpen ? "bg-black/50 visible opacity-100" : "invisible opacity-0",
				)}
				onClick={closeSidebar}
			/>

			{/* Animated Mobile Sidebar */}
			<aside
				className={clsx(
					"fixed top-0 left-0 h-full w-64 z-50 bg-[#111026] px-6 py-6 space-y-4 shadow-xl transition-transform duration-300 md:hidden",
					isOpen ? "translate-x-0" : "-translate-x-full",
				)}
			>
				<NavItem
					key="mobile-home"
					href="/"
					icon="/icon/girl.svg"
					label="Home"
					onClick={closeSidebar}
				/>
				<NavItem
					key="mobile-hentai"
					href="/mika"
					icon="/icon/anime.svg"
					label="Meet Mika!"
					onClick={closeSidebar}
				/>
				<NavItem
					key="mobile-boyfriend"
					href="/capsules"
					icon="/icon/male.svg"
					label="Capsules"
					onClick={closeSidebar}
				/>

				<Link href="/capsules-signup" onClick={closeSidebar}></Link>
				<Link href="/login" onClick={closeSidebar}>
					<Button
						variant="ghost"
						className="w-full text-white hover:text-slate-300 hover:bg-slate-800"
					>
						Login
					</Button>
				</Link>
				<Link href="/register" onClick={closeSidebar}>
					<Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
						Sign Up for Capsules
					</Button>
				</Link>
			</aside>
		</>
	);
}

function NavItem({
	href,
	icon,
	label,
	onClick,
}: {
	href: string;
	icon: string;
	label: string;
	onClick?: () => void;
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="flex items-center space-x-2 text-white hover:text-slate-100 transition-colors p-3 rounded-lg hover:bg-slate-600 border border-transparent hover:border-slate-500"
		>
			<div className="w-5 h-5 rounded-full flex items-center justify-center">
				<Image
					src={icon}
					alt={label}
					width={24}
					height={24}
					className="rounded-full"
				/>
			</div>
			<span className="text-sm font-medium">{label}</span>
		</Link>
	);
}
