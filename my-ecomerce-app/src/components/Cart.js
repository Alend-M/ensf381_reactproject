import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({cartItems, handleRemoveItem}) => {
    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} handleRemoveItem={handleRemoveItem} />
                ))}
            </div>
        </div>
    );
}
export default Cart;