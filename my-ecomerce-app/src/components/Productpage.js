import React, {useState, useEffect}from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedQuantity = localStorage.getItem('quantity');
        if (storedCartItems && storedQuantity) {
            setCartItems(JSON.parse(storedCartItems));
            setQuantity(JSON.parse(storedQuantity));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('quantity', JSON.stringify(quantity));
    }, [cartItems, quantity]);


    const handleRemoveItem = (id) => {
        const CartItem = cartItems.filter(item => item.id === id);
        const index = cartItems.indexOf(CartItem);
        if (quantity > 1){
            setQuantity(quantity[index] - 1);
        }else{
            setCartItems(cartItems.filter(item => item.id !== id));
            setQuantity(quantity.filter((_, i) => i !== index));
        }
    };

    const handleAddToCart = (id) => {
        const product = cartItems.find(item => item.id === id);
        if (product){
            const index = cartItems.indexOf(product);
            setQuantity(quantity[index] + 1);
        }else{
            const newProduct = id
            setCartItems([...cartItems, newProduct]);
            setQuantity([...quantity, 1]);
        }
    };
    

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList handleAddToCart={handleAddToCart} /></td>
                    <td style={{verticalAlign:'top'}}><Cart CartItems={cartItems} quantity={quantity} handleRemoveItem={handleRemoveItem} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;