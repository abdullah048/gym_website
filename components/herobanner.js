import React from "react";
import { Box, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function HeroBanner() {
	return (
		<Box className="lg:mt-[212px] sm:mt-[70px] sm:ml-[50px] relative p-20">
			<h5 className="font-bold text-xl">Fitness Club</h5>
			<p className="font-semibold lg:text-[44px] sm:text-[40px]">
				Sweat, Smile <br /> and Repeat{" "}
			</p>
			<p className="text-md leading-9">
				Checkout the most effective exercises.
			</p>
			{/* For Dark mode when i will configure how to add different colors for light and dark mode */}
			{/* <Button colorScheme="teal" variant="ghost">
				Explore Exercises
			</Button> */}
			<Button
				rightIcon={<ArrowForwardIcon />}
				colorScheme={useColorModeValue("red", "teal")}
				mt={2}
				mb={10}
				href="#exercises">
				Explore Exercises
			</Button>
			<p
				className="font-bold text-[200px] opacity-10 mt-10 lg:block xs:hidden"
				style={{ color: useColorModeValue("#ff2625", "white") }}>
				Exercise
			</p>
			<img
				src="/images/banner.png"
				alt="herobanner"
				className="hidden lg:block lg:absolute lg:right-[40px] lg:top-0 lg:w-[700px] lg:h-[900px] lg:mt-[-310px]"
			/>
		</Box>
	);
}

export default HeroBanner;
