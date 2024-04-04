// Homepage.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomeMainSection from "./HomeMainSection";
import Productpage from "./Productpage";
import ProductList from "./ProductList";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Homepage = () => {
	return (
		<div className="homepage">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomeMainSection />} />
					<Route exact path="/Productpage" element={<Productpage />} />
					<Route exact path="/products" element={<Productpage />} />
					<Route exact path="/login" element={<LoginForm />} />
					<Route exact path="/signup" element={<SignupForm />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Homepage;
