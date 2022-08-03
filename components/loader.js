import React from "react";
import { Stack, Spinner } from "@chakra-ui/react";

const Loader = () => {
	return (
		<Stack direction="row" justify="center" align="center" width="100%">
			<Spinner />
		</Stack>
	);
};

export default Loader;
