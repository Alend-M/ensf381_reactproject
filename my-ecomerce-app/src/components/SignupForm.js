import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const SignupForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
		email: "",
	});
	const [passwordError, setPasswordError] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleButtonClick = () => {
		navigate("/login");
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, confirmPassword, email } = formData;
        
        if (!username || !password || !confirmPassword || !email) {
            displayMessage("Please fill out all fields", true);
        } else if (password !== confirmPassword) {
            displayMessage("Passwords do not match", true);
        } else {
            // Call your signup API here
            // Display success or failure message accordingly
            displayMessage("Signup successful!", false); // Placeholder for success
    
            // Clear input fields
            setFormData({
                username: "",
                password: "",
                confirmPassword: "",
                email: ""
            });
        }
    };
    

	const displayMessage = (message, isError) => {
		// Update the password error state
		setPasswordError(message);
		// If it's an error or success, clear it after 5 seconds
		setTimeout(() => setPasswordError(""), 5000);
	};

	return (
		<div className="sign-up-container">
			<div className="sign-up-content">
				<h1>Signup</h1>
				{passwordError && <p className="error-message">{passwordError}</p>}
				<form id="signupForm" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							name="username"
							value={formData.username}
							onChange={handleInputChange}
							placeholder="Enter your username"
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							placeholder="Enter your password"
							required
						/>
					</div>
					<div>
						<label htmlFor="confirmPassword">Confirm Password:</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={formData.confirmPassword}
							onChange={handleInputChange}
							placeholder="Confirm your password"
							required
						/>
					</div>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Enter your email"
							required
						/>
					</div>
					<div>
						<button type="submit" className="sign-up-button">
							Signup
						</button>
					</div>
					<div>
						<button className="login-swap-btn" onClick={handleButtonClick}>
							Switch to Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;
