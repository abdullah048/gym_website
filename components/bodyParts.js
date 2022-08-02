import React from "react";
import { HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { CgGym } from "react-icons/cg";

function BodyParts({ item, exerciseCategory, setExerciseCategory }) {
	return (
		<HStack
			as="button"
			alignItems="center"
			justifyContent="center"
			transform={"scale(1, 1)"}
			_hover={{
				transform: "scale(1.1, 1.1)",
				transition: "0.3s all ease-in-out",
			}}
			sx={{
				borderTop:
					exerciseCategory === item
						? `4px solid ${useColorModeValue("red", "teal")}`
						: "",
				backgroundColor: useColorModeValue("white", "blackAlpha.50"),
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "280px",
				cursor: "pointer",
				gap: "47px",
			}}
			onClick={() => {
				setExerciseCategory(item);
				window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
			}}>
			<VStack>
				<CgGym size={30} />

				<Text fontSize={24} fontWeight="bold" textTransform="capitalize">
					{item}
				</Text>
			</VStack>
		</HStack>
	);
}

export default BodyParts;
