import React from "react";
import { Box } from "@chakra-ui/react";
import BodyParts from "./bodyParts";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import ExerciseCard from "../components/exerciseCard";

function HorizontalScrollBar({
  data,
  exerciseCategory,
  setExerciseCategory,
  isBodyPart,
}) {
  return (
    <ScrollMenu>
      {data &&
        data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyPart ? (
              <BodyParts
                item={item}
                exerciseCategory={exerciseCategory}
                setExerciseCategory={setExerciseCategory}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar;
