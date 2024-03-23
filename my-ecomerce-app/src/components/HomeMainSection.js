import React, { useState, useEffect } from "react";
import reviewsData from "../data/review";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const HomeMainSection = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		// Fetching random reviews from reviewsData
		const randomReviews = getRandomReviews(reviewsData, 2);
		setReviews(randomReviews);
	}, []);

	// Function to get random reviews
	const getRandomReviews = (reviewsArray, count) => {
		const shuffled = reviewsArray.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const navigate = useNavigate();

	function handleButtonClick() {
		navigate("/Productpage");
	}

	return (
		<div className="home-main-section">
			<section className="about-us-section">
				<h2>About Us</h2>
				<p>Company's vision and mission description goes here.</p>

				<button className="shop-now-btn" onClick={handleButtonClick}>
					Shop Now
				</button>
			</section>
			<section className="customer-reviews-section">
				<h2>Customer Reviews</h2>
				<div className="customer-reviews">
					{reviews.map((review, index) => (
						<div key={index} className="review">
							<p>{review.customerName}</p>
							<p>{review.reviewContent}</p>
							<p>{"★".repeat(review.stars)}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomeMainSection;
