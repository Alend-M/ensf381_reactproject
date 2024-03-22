import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);
    

    const handleRemove = (id) => {
        const CartItem = cartItems.filter(item => item.id === id);
        const index = cartItems.indexOf(CartItem);
        if (quantity > 1){
            setQuantity(quantity[index] - 1);
        }else{
            setCartItems(cartItems.filter(item => item.id !== id));
            setQuantity(quantity.filter((_, i) => i !== index));
        }
    }

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} handleRemove={handleRemove} />
                ))}
            </div>
        </div>
    );
}
export default Cart;