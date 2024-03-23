import CartItem from "./CartItem";

const Cart = ({cartItems, handleRemoveItem, quantity}) => {

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.map((item, index) => (
                    <CartItem key={item.id} item={item} handleRemoveItem={handleRemoveItem} index={index} quantity={quantity}/>
                ))}
            </div>
        </div>
    );
}
export default Cart;