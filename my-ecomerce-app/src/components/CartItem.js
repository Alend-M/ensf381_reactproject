import React from 'react';
import products from '../data/products.js'

const CartItem = ({ item, handleRemoveItem, quantity,pricePerItem }) => {
    const product = products.find(product => product.id === item);

    return (
        <div className="cart-item">
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>Quantity: {quantity}</p>
            <p>total Price: ${pricePerItem.toFixed(2)}</p>
            <button className="Remove-From-Cart-Button" onClick={() => handleRemoveItem(item)}>Remove from Cart</button>
        </div> 
    );
};

export default CartItem;
