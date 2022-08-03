import React from "react";
import {
	Button,
	Text,
	Link,
	HStack,
	Image,
	useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

function ExerciseCard({ exercise }) {
	return (
		<HStack
			width="350px"
			height="470px"
			display="flex"
			justifyContent="space-between"
			flexDirection="column"
			borderRadius="20px"
			sx={{ mb: { sx: "50px", sm: "70px" } }}
		>
			<NextLink href={`/exercise/${exercise.id}`} passHref>
				<Link _hover={{ textDecoration: "none" }}>
					<Image
						src={exercise.gifUrl}
						alt={exercise.name}
						loading="lazy"
						borderRadius="20px"
						boxShadow={"xl"}
					/>
					<HStack justify="center" align="center" mt="20px">
						<Button
							textDecoration="none"
							sx={{
								color: useColorModeValue("black"),
								boxShadow: "lg",
								textTransform: "capitalize",
								bg: useColorModeValue("gray.300"),
							}}
						>
							{exercise.bodyPart}
						</Button>
						<Button
							textDecoration="none"
							sx={{
								color: useColorModeValue("black"),
								boxShadow: "lg",
								textTransform: "capitalize",
								bg: useColorModeValue("", "teal.500"),
							}}
						>
							{exercise.target}
						</Button>
					</HStack>
					<Text
						textTransform="capitalize"
						mt="2"
						textAlign="center"
						fontWeight="bold"
						sx={{
							mt: { xs: "3px", sm: "7px", lg: "15px", xl: "20px" },
							fontSize: { xl: "larger" },
						}}
					>
						{exercise.name}
					</Text>
				</Link>
			</NextLink>
		</HStack>
	);
}

export default ExerciseCard;
