import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Box } from "@chakra-ui/react";
import Detail from "../../components/detail";
import ExerciseVideo from "../../components/exerciseVideo";
import SimilarExercises from "../../components/similarExercises";
import { useRouter } from "next/router";
import { options, fetchData, youtubeOptions } from "../../utils/fetchdata";

function ExerciseDetail() {
  const {
    query: { id },
  } = useRouter();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        options
      );
      const youtubeSearchData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      const targetMuscleExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        options
      );
      const equipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        options
      );

      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(youtubeSearchData);
      setTargetMuscleExercises(targetMuscleExerciseData);
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExercisesData();
    console.log(exerciseVideos);
  }, [id]);

  return (
    <Layout>
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideo
          exerciseVideos={exerciseVideos.contents}
          name={exerciseDetail.name}
        />
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </Box>
    </Layout>
  );
}

export default ExerciseDetail;
