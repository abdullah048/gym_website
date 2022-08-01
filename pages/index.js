import Layout from "../components/layout";
import { Box } from "@chakra-ui/react";
import HeroBanner from "../components/herobanner";
import Search from "../components/search";
import Exercises from "../components/exercises";
import { useState } from "react";

export default function Home() {
	//FIXME:Create a store instead of props-drilling...
	const [exercises, setExercises] = useState([]);
	const [exercisesCategory, setExercisesCategory] = useState("all");
	return (
		<Layout title="Home">
			<Box>
				<HeroBanner />
				<Search
					setExercises={setExercises}
					exercisesCategory={exercisesCategory}
					setExercisesCategory={setExercisesCategory}
				/>
				<Exercises
					setExercises={setExercises}
					exercisesCategory={exercisesCategory}
					setExercisesCategory={setExercisesCategory}
				/>
			</Box>
		</Layout>
	);
}
