import React from "react";
import CartItem from "./CartItem.js";
import "./ProductItem.css";

const Cart = ({
	cartItems,
	handleRemoveItem,
	quantity,
	pricePerItem,
	totalPrice,
	products,
}) => {
	return (
		<div className="Cart">
			<h1>Shopping Cart</h1>
			<div>
				{cartItems === null || cartItems.length === 0 ? (
					<p>Your cart is empty</p>
				) : (
					cartItems.map((item, index) => (
						<CartItem
							key={item} // Use the item ID as the key
							item={item}
							handleRemoveItem={handleRemoveItem}
							index={index}
							quantity={quantity[index]}
							pricePerItem={pricePerItem[index]}
							products={products}
						/>
					))
				)}
				{cartItems && cartItems.length > 0 && (
					<p>Total Price(in cart): ${totalPrice.toFixed(2)}</p>
				)}
			</div>
		</div>
	);
};

export default Cart;
