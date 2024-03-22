import React, {useState}from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

const Productpage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);

    const handleRemoveItem = (id) => {

    };

    const handleAddToCart = (product) => {

    };
    

    return(
        <div class="Product-Page">
            <Header/>
            <div>
                <ProductList handleAddToCart={handleAddToCart}/>
                <Cart handleRemoveItem={handleRemoveItem}/>
            </div>
            <Footer />
        </div>
    );
}

export default Productpage;