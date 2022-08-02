// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const breakpoints = {
	xs: "320px",
	sm: "425px",
	md: "786px",
	lg: "1163px",
	xl: "1440px",
	// "2xl": "1310px",
};
const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, breakpoints });

export default theme;
