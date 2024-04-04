import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Header from "./Header";

const LoginPage = () => {
	return (
		<div className="loginpage">
			<BrowserRouter>
            
				<Routes>
					<Route exact path="/login" element={<LoginForm />} />
					<Route exact path="/signup" element={<SignupForm />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default LoginPage;