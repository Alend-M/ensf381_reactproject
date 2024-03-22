import { useState } from "react";
import Cart from "./Cart";

const CartItem = ({item, handleRemoveFromCart}) => {
    const {quantity, setQuantity} = useState(1);

    
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="Remove-From-Cart-Button" onClick={handleRemoveFromCart(item.id)}>Remove from Cart</button>
        </div>
        
    );
}

export default CartItem;