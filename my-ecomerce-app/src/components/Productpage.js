import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import CartItem from './CartItem';

const Productpage = () => {
    return(
        <div class="Product-Page">
            <Header/>
            <div>
                <CartItem/>
                <ProductList />
            </div>
        </div>
    );
}

export default Productpage;