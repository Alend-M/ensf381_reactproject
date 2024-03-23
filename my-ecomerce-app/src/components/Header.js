import React from "react";

import "./Header.css";

const Header = () => {
	return (
		<header>
			<div>
				<img src="images/logo.png" alt="Company Logo" className="logo2" />
			</div>
			<div className="comp-name">E-Mart</div>
			<nav>
				<a href="/">Home</a>
				<a href="/products">Products</a>
				<a href="/login">Login</a>
			</nav>
		</header>
	);
};

export default Header;
