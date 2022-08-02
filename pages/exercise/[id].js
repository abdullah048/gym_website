import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Box } from "@chakra-ui/react";
import Detail from "../../components/detail";
import ExerciseVideo from "../../components/exerciseVideo";
import SimilarExercises from "../../components/similarExercises";
import { useRouter } from "next/router";

function ExerciseDetail() {
	const {
		query: { id },
	} = useRouter();
	const [exerciseDetail, setExerciseDetail] = useState({});

	useEffect(() => {
		const fetchExercisesData = async () => {};
		fetchExercisesData();
	}, [id]);

	return (
		<Layout>
			<Box>
				<Detail exerciseDetail={exerciseDetail} />
				<ExerciseVideo />
				<SimilarExercises />
			</Box>
		</Layout>
	);
}

export default ExerciseDetail;
