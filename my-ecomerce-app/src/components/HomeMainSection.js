import React, { useState, useEffect } from "react";
import reviewsData from "../data/review";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./HomeMS.css";

const HomeMainSection = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const randomReviews = getRandomReviews(reviewsData, 2);
		setReviews(randomReviews);
	}, []);

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
				<p>Welcome to our online store! We are passionate about prodivding high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
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
							<p>Rating: {"★".repeat(review.stars)}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default HomeMainSection;
