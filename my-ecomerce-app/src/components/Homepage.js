import React from "react";
import Header from "./Header";
import "./Header.css";
import HomeMainSection from "./HomeMainSection";
import Footer from "./Footer";

const Homepage = () => {
	return (
		<div className="homepage">
			<Header />
			<HomeMainSection />
			<Footer />
		</div>
	);
};

export default Homepage;
