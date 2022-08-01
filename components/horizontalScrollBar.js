import React from "react";
import { Box } from "@chakra-ui/react";
import BodyParts from "./bodyParts";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

function HorizontalScrollBar({ data, exerciseCategory, setExerciseCategory }) {
	return (
		<ScrollMenu>
			{data &&
				data.map((item) => (
					<Box
						key={item.id || item}
						itemID={item.id || item}
						title={item.id || item}
						m="0 40px">
						<BodyParts
							item={item}
							exerciseCategory={exerciseCategory}
							setExerciseCategory={setExerciseCategory}
						/>
					</Box>
				))}
		</ScrollMenu>
	);
}

export default HorizontalScrollBar;
