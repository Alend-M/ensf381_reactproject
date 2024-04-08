import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
	const navigate = useNavigate();
	const [passwordError, setPasswordError] = useState("");

	const displayMessage = (message) => {
		// Update the password error state
		setPasswordError(message);
		// If it's an error or success, clear it after 5 seconds
		setTimeout(() => setPasswordError(""), 5000);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
		// For example, you can validate the inputs and make an API call for authentication
		// Then, navigate to the next page upon successful login

		const username = event.target.username.value;
		const password = event.target.password.value;

		// Make a POST request to the API endpoint
		fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
		})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					localStorage.setItem("isLoggedIn", true);
					navigate("/products");
				} else {
					displayMessage(data.error);
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	function handleButtonClick() {
		navigate("/signup");
	}

	return (
		<section className="login-form">
			<h1>Login</h1>
			<div className="sign-up-content">
			{passwordError && <p className="error-message">{passwordError}</p>}
			</div>
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
