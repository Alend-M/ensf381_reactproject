import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
	return (
		<header>
			<div>
				<img src="images/logo.png" alt="Company Logo" className="logo2" />
			</div>
			<div className="comp-name">E-Mart</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/login">Login</Link>
			</nav>
		</header>
	);
};

export default Header;
