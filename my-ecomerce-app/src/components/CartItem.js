import React from 'react';
import "./ProductItem.css";

const CartItem = ({ item, handleRemoveItem, quantity, pricePerItem, products }) => {
    // Check if products array is defined and not empty
    if (!products || products.length === 0) {
        return <div>Loading...</div>; // or some other handling for when products are not available
    }

    // Find the product with the matching id
    const product = products.find(product => product.id === item);

    // Check if product is found
    if (!product) {
        return <div>Product not found</div>; // or some other handling for when product is not found
    }

    return (
        <div className="cart-item">
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${pricePerItem.toFixed(2)}</p>
            <button className="Remove-From-Cart-Button" onClick={() => handleRemoveItem(item)}>Remove from Cart</button>
        </div> 
    );
};

export default CartItem;
