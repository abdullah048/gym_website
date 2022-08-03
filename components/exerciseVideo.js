import React from "react";
import {
	Box,
	Image,
	Text,
	Link,
	Stack,
	useColorModeValue,
	Heading,
} from "@chakra-ui/react";

function ExerciseVideo({ exerciseVideos, name }) {
	function truncate(str) {
		return str.length > 10 ? str.substring(0, 15) + "..." : str;
	}
	return (
		<Box
			sx={{
				marginTop: {
					xs: "20px",
					sm: "30px",
					md: "50px",
				},
				p: "20px",
			}}
		>
			<Heading
				sx={{
					fontSize: {
						xs: "20px",
						sm: "25px",
						md: "50px",
					},
				}}
				mb="20px"
				textAlign="center"
			>
				Watch &nbsp;
				<span
					style={{
						color: useColorModeValue("red", "teal"),
						textTransform: "capitalize",
					}}
				>
					{name}
				</span>{" "}
				exercise Videos
			</Heading>
			<Stack
				flexWrap="wrap"
				alignItems="center"
				sx={{
					flexDirection: {
						xs: "column",
						sm: "row",
						md: "row",
						lg: "row",
					},
					gap: {
						xs: "0",
						sm: "30px",
						md: "50px",
						lg: "80px",
					},
					justifyContent: "center",
				}}
			>
				{exerciseVideos?.slice(0, 3).map((video, index) => (
					<Link
						key={index}
						href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
						target="_blank"
						rel="noreferrer"
						_hover={{
							textDecoration: "none",
							color: useColorModeValue("red.200", "teal.200"),
						}}
					>
						<Image
							boxShadow="xl"
							src={video.video.thumbnails[0].url}
							alt={video.video.title}
							borderRadius="10px"
							width="300px"
							height="300px"
						/>
						<Box
							display="flex"
							flexWrap="wrap"
							sx={{
								flexDirection: {
									xs: "column",
									lg: "row",
								},
							}}
							justifyContent="center"
							alignItems="center"
							mt="10px"
						>
							<Text pr="5">{truncate(video.video.title)}</Text>
							<Text color={useColorModeValue("red", "teal")} fontWeight="bold">
								{truncate(video.video.channelName)}
							</Text>
						</Box>
					</Link>
				))}
			</Stack>
		</Box>
	);
}

export default ExerciseVideo;
