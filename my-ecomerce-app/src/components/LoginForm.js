import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		// For example, you can validate the inputs and make an API call for authentication
		// Then, navigate to the next page upon successful login
		navigate("/dashboard"); // Example navigation to a dashboard page
	};

	function handleButtonClick() {
		navigate("/signup");
	}

	return (
		<section className="login-form">
			<h1>Login</h1>
			<form className="login-content" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						required
						placeholder="Enter your username"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						required
						placeholder="Enter your password"
					/>
				</div>

				<button type="submit" className="login-btn">
					Login
				</button>

				<button className="signup-btn" onClick={handleButtonClick}>
					Switch to Signup
				</button>
			</form>
		</section>
	);
};

export default LoginForm;
