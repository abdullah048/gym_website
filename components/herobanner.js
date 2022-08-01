import React from "react";
import { Box, Button, useColorModeValue, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function HeroBanner() {
	return (
		<Box className="lg:mt-[212px] sm:mt-[70px] sm:ml-[50px] relative p-20">
			<Text
				className="font-bold text-xl"
				color={useColorModeValue("red.500", "white")}>
				Fitness Club
			</Text>
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
				sx={{ marginBottom: { xl: "10" } }}
				p={7}
				href="#exercises">
				Explore Exercises
			</Button>
			<Text
				fontWeight="bold"
				fontSize={"200px"}
				sx={{
					fontSize: {
						xl: "12em",
					},
					display: { xs: "none", md: "none", sm: "none", xl: "block" },
				}}
				color={useColorModeValue("red.50", "whiteAlpha.200")}>
				Exercise
			</Text>
			<Image
				src="/images/banner.png"
				alt="herobanner"
				sx={{
					position: { xl: "absolute" },
					display: { xs: "none", sm: "none", xl: "block" },
					top: { xl: "0" },
					width: { xl: "700px" },
					height: { xl: "900px" },
					marginTop: { xl: "-310px" },
					right: { xl: "0" },
				}}
				// className="hidden lg:block lg:absolute lg:right-[40px] lg:top-0 lg:w-[700px] lg:h-[900px] lg:mt-[-310px]"
			/>
		</Box>
	);
}

export default HeroBanner;
