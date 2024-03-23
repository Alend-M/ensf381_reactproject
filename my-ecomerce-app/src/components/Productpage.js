import React, { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";

const Productpage = () => {
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState([]);

	return (
		<div className="product-page">
			
			<p1>pretend this is a product page</p1>
			
		</div>
	);
};

export default Productpage;
