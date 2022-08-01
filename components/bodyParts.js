import React from "react";
import { HStack, Text, Image, useColorModeValue } from "@chakra-ui/react";

function BodyParts({ item, exerciseCategory, setExerciseCategory }) {
	return (
		<HStack
			as="button"
			width="40px"
			height="40px"
			alignItems="center"
			justifyContent="center"
			transform={"scale(1, 1)"}
			_hover={{
				transform: "scale(1.1, 1.1)",
				transition: "0.3s all ease-in-out",
			}}
			sx={{
				borderTop: exerciseCategory === item ? "4px solid red" : "",
				backgroundColor: useColorModeValue("white", "blackAlpha.50"),
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "280px",
				cursor: "pointer",
				gap: "47px",
			}}>
			<Image src="/icons/gym.png" alt="gym-icon" />
		</HStack>
	);
}

export default BodyParts;
