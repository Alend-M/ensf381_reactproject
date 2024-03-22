import { useState } from "react";
import Cart from "./Cart";

const CartItem = (props) => {
    const {quantity, setQuantity} = useState(1);

    return (
        <div className="cart-item">
            <img src={props.image} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <p>Quantity: {quantity}</p>
            <button className="Remove-From-Cart-Button" onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
        
    );
}

export default CartItem;