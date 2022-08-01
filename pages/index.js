import Layout from "../components/layout";
import { Box } from "@chakra-ui/react";
import HeroBanner from "../components/herobanner";
import Search from "../components/search";
import Exercises from "../components/exercises";

export default function Home() {
	return (
		<Layout title="Home">
			<Box>
				<HeroBanner />
				<Search />
				<Exercises />
			</Box>
		</Layout>
	);
}
