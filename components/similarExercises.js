import React from "react";
import { Box, Stack, Heading } from "@chakra-ui/react";
import HorizontalScrollBar from "../components/horizontalScrollBar";
import Loader from "./loader";

function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
	return (
		<Box
			sx={{
				marginTop: {
					xs: "20px",
					sm: "25px",
					md: "35px",
					lg: "50px",
				},
			}}
		>
			<Heading
				sx={{
					fontSize: {
						xs: "15px",
						sm: "20px",
						md: "35px",
						lg: "45px",
					},
					textAlign: "center",
				}}
				mb="5"
			>
				Exercises that target the same muscle group.
			</Heading>
			<Stack
				direction="row"
				p="2"
				position="relative"
				overflowX="auto"
				mb="20px"
			>
				{targetMuscleExercises.length ? (
					<HorizontalScrollBar data={targetMuscleExercises} />
				) : (
					<Loader />
				)}
			</Stack>
			<Heading
				sx={{
					fontSize: {
						xs: "15px",
						sm: "20px",
						md: "35px",
						lg: "45px",
					},
					textAlign: "center",
				}}
				mb="5"
			>
				Exercises that uses same equipment.
			</Heading>
			<Stack direction="row" p="2" position="relative" overflowX="auto">
				{equipmentExercises.length ? (
					<HorizontalScrollBar data={equipmentExercises} />
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
}

export default SimilarExercises;
