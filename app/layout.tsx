import type { Metadata } from "next";
import { poppins } from "@/app/styles/fonts";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
	title: "UNLAD",
	description: "for scholars, by scholars",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				{children}
			</body>
		</html>
	);
}
