import Layout from "../components/layout";
import { Box } from "@chakra-ui/react";
import HeroBanner from "../components/herobanner";
import Search from "../components/search";
import Exercises from "../components/exercises";
import { useState } from "react";
import React from "react";

export default function Home() {
  //FIXME:Create a store instead of props-drilling...
  const [exercises, setExercises] = useState([]);
  const [exerciseCategory, setExerciseCategory] = useState("all");
  return (
    <Layout title="Home">
      <Box>
        <HeroBanner />
        <Search
          setExercises={setExercises}
          exerciseCategory={exerciseCategory}
          setExerciseCategory={setExerciseCategory}
        />
        <Exercises
          setExercises={setExercises}
          exerciseCategory={exerciseCategory}
          exercises={exercises}
        />
      </Box>
    </Layout>
  );
}
