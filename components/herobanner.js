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
						lg: "12em",
					},
					display: { xs: "none", md: "none", sm: "none", lg: "block" },
				}}
				color={useColorModeValue("red.50", "whiteAlpha.200")}>
				Exercise
			</Text>
			<Image
				src="/images/banner.png"
				alt="herobanner"
				sx={{
					position: { lg: "absolute" },
					display: { xs: "none", sm: "none", lg: "block" },
					top: { lg: "0" },
					width: { lg: "600px" },
					height: { lg: "900px" },
					marginTop: { lg: "-310px" },
					right: { lg: "0" },
				}}
			/>
		</Box>
	);
}

export default HeroBanner;
