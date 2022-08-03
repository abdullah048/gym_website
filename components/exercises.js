import React, { useEffect } from "react";
import { Box, Heading, HStack, useColorModeValue } from "@chakra-ui/react";
import {
	Paginator,
	Container,
	Previous,
	Next,
	PageGroup,
	usePaginator,
} from "chakra-paginator";
import { fetchData, options } from "../utils/fetchdata";
import ExerciseCard from "./exerciseCard";

function Exercises({ setExercises, exerciseCategory, exercises }) {
	const url = "https://exercisedb.p.rapidapi.com/exercises";
	const { currentPage, setCurrentPage } = usePaginator({
		initialState: { currentPage: 1 },
	});
	const handlePageChange = (nextPage) => {
		setCurrentPage(nextPage);
		window.scrollTo({ top: 1800, behavior: "smooth" });
	};

	const exercisesPerPage = 9;
	const outerLimit = 1;
	const innerLimit = 1;
	const pagesQuantity = Math.ceil(exercises.length / exercisesPerPage);
	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercisesPerPage = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);
	const baseStyles = {
		w: 5,
		p: 4,
		fontSize: "sm",
		// borderRadius: "50px",
	};

	const normalStyles = {
		...baseStyles,
		_hover: {
			bg: useColorModeValue("gray.500", "gray.700"),
		},
		bg: useColorModeValue("gray.300", "gray.400"),
	};

	const activeStyles = {
		...baseStyles,
		_hover: {
			bg: useColorModeValue("blue.500", "teal.900"),
		},
		bg: useColorModeValue("blue.300", "teal.500"),
	};

	const separatorStyles = {
		w: 7,
		bg: useColorModeValue("blue.300", "teal.500"),
	};

	useEffect(() => {
		const fetchExercisesData = async () => {
			let exerciseData = [];
			if (exerciseCategory === "all") {
				exerciseData = await fetchData(url, options);
			} else {
				exerciseData = await fetchData(
					`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseCategory}`,
					options
				);
			}
			setExercises(exerciseData);
		};
		fetchExercisesData();
	}, [exerciseCategory]);

	return (
		<Box id="exercises" sx={{ mt: { lg: "30px" } }} mt="20px" p="20px">
			{currentExercisesPerPage && (
				<Heading mb="46px" textAlign="center">
					Showing Results
				</Heading>
			)}
			<HStack
				sx={{ gap: { xs: "30px", sm: "45px", lg: "110px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercisesPerPage &&
					currentExercisesPerPage.map((exercise, index) => (
						<ExerciseCard key={index} exercise={exercise} />
					))}
			</HStack>
			<HStack mt="100px" alignItems="center">
				{exercises && exercises.length > 9 && (
					<Paginator
						normalStyles={normalStyles}
						activeStyles={activeStyles}
						separatorStyles={separatorStyles}
						pagesQuantity={pagesQuantity}
						currentPage={currentPage}
						onPageChange={handlePageChange}
						outerLimit={outerLimit}
						innerLimit={innerLimit}
					>
						<Container align="center" justify="space-between" w="full" p={4}>
							<Previous>B{/* Or an icon from `react-icons` */}</Previous>
							<PageGroup isInline align="center" />

							<Next>F{/* Or an icon from `react-icons` */}</Next>
						</Container>
					</Paginator>
				)}
			</HStack>
		</Box>
	);
}

export default Exercises;
