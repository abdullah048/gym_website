import Head from "next/head";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ title, children }) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				exit={{ opacity: 0 }}>
				<Head>
					<title>{title ? `${title}` : "Gym-Exercise"}</title>
				</Head>
				<Navbar />
				{children}
				<Footer />
			</motion.div>
		</AnimatePresence>
	);
};

export default Layout;
