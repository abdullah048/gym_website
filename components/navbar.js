import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import ThemeToggleButton from "../components/toggle-theme-button";

export default function Navbar() {
	return (
		<HStack className="lg:justify-start sm:px-5 sm:justify-around xs:justify-around md:justify-around px-3 sm:gap-[122px] xs:gap-[40px] sm:mt-[32px] xs:mt-[20px]">
			<NextLink href="/">
				{/* <img src="/images/Logo.png" alt="logo" /> */}
				<h3 className="text-4xl font-semibold">GYM</h3>
			</NextLink>
			<HStack>
				<NextLink href="/" passHref>
					<Link style={{ textDecoration: "none" }}>Home</Link>
				</NextLink>
				<NextLink href="#exercises" passHref>
					<Link className="!ml-10" style={{ textDecoration: "none" }}>
						Exercises
					</Link>
				</NextLink>
			</HStack>
			<ThemeToggleButton />
		</HStack>
	);
}
