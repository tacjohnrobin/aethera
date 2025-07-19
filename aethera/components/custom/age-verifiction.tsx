"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

export function AgeVerification() {
	const [isVerified, setIsVerified] = useState(true); // Assume verified until checked
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const ageVerified = localStorage.getItem("studio_aethera_age_verified");
		if (ageVerified === "true") {
			setIsVerified(true);
			setShowModal(false);
		} else {
			setIsVerified(false);
			setShowModal(true);
		}
	}, []);

	const handleVerifyAge = (isOver18: boolean) => {
		if (isOver18) {
			localStorage.setItem("studio_aethera_age_verified", "true");
			setIsVerified(true);
			setShowModal(false);
		} else {
			// Redirect to a safe site if not 18+
			window.location.href = "https://www.google.com";
		}
	};

	if (isVerified && !showModal) {
		return null; // Don't render anything if already verified or not showing modal
	}

	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4">
			<Card className="bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-pink-900/80 border-purple-500/50 text-white max-w-md w-full text-center shadow-2xl">
				<CardContent className="p-8 flex flex-col items-center">
					<ShieldAlert className="w-16 h-16 text-red-400 mb-6 animate-pulse" />
					<h2 className="text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
						Age Verification Required
					</h2>
					<p className="text-sm text-purple-200/90 mb-6 leading-relaxed">
						This website contains content intended for adult audiences only. By
						entering, you confirm that you are 18 years of age or older.
					</p>
					<div className="flex flex-row gap-4 w-full">
						<Button
							onClick={() => handleVerifyAge(true)}
							className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-xl transition-all duration-300"
						>
							Yes, I am 18+
						</Button>
						<Button
							onClick={() => handleVerifyAge(false)}
							variant="outline"
							className="flex-1 border-red-400 text-red-300 hover:bg-red-900/50 px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
						>
							No, I am not
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
