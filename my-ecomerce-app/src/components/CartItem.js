const CartItem = ({item, handleRemove, index, quantity}) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name}/>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <p>Quantity: {quantity[index]}</p>
            <button className="Remove-From-Cart-Button" onClick={handleRemove(item.id)}>Remove from Cart</button>
        </div> 
    );
}

export default CartItem;