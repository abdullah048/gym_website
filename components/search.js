import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { fetchData, options } from "../utils/fetchdata";
import HorizontalScrollBar from "./horizontalScrollBar";

function Search({ setExercises, exerciseCategory, setExerciseCategory }) {
  const [searchInput, setSearchInput] = useState("");
  const [exerciseCategories, setExerciseCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const exerciseCategories = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setExerciseCategories(["all", ...exerciseCategories]);
    }
    fetchCategories();
  }, []);

  const url = "https://exercisedb.p.rapidapi.com/exercises";
  async function handleSearch() {
    if (searchInput) {
      const exercisesData = await fetchData(url, options);
      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchInput) ||
          exercise.target.toLowerCase().includes(searchInput) ||
          exercise.equipment.toLowerCase().includes(searchInput) ||
          exercise.bodyPart.toLowerCase().includes(searchInput)
        );
      });
      setSearchInput("");
      setExercises(searchedExercises);
    }
  }
  return (
    <VStack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ marginTop: { xl: "37px" }, padding: { xl: "10px" } }}
    >
      <Text
        fontSize={{ xs: "1.8em", sm: "2.3em", lg: "3.2	em", xl: "4em" }}
        fontWeight={700}
        textAlign="center"
        mb={20}
      >
        Awsome Exercises You <br /> Should Know
      </Text>
      <Box position="relative" mb={72}>
        <Input
          placeholder="Search Exercises"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          height={"14"}
          sx={{
            input: { fontWeight: "700", borderRadius: "5px", border: "none" },
            width: { base: "350px", md: "550px", lg: "780px", xl: "900px" },
            borderRadius: "5px",
          }}
          focusBorderColor="none"
        />
        <Button
          position="absolute"
          right="0"
          color={useColorModeValue("white", "black")}
          colorScheme={useColorModeValue("red", "teal")}
          height={"14"}
          sx={{
            width: { xs: "80px", md: "110px", lg: "130px", xl: "175px" },
            fontSize: { xs: "small", sm: "medium", lg: "large", xl: "xl" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollBar
          data={exerciseCategories}
          exerciseCategory={exerciseCategory}
          setExerciseCategory={setExerciseCategory}
          isBodyPart
        />
      </Box>
    </VStack>
  );
}

export default Search;
