import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./Header.css";
import HomeMainSection from "./HomeMainSection";
import Productpage from "./Productpage";
import Footer from "./Footer";

const Homepage = () => {
	return (
		<BrowserRouter>
			<div className="homepage">
				<Header />
				<HomeMainSection />
				<Footer />
			</div>
			<Routes>
				<Route exact path="./Productpage.js" element={<Productpage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Homepage;
