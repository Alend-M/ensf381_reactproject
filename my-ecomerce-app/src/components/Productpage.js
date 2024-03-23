import React, {useState, useEffect}from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import product from '../data/products';

const Productpage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [pricePerItem, setPricePerItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

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
        console.log("Removing item: " + id);
        const index = cartItems.indexOf(id);
        if (index !== -1) {
            if (quantity[index] > 1) {
                setQuantity(prevQuantity => {
                    const updatedQuantity = [...prevQuantity];
                    updatedQuantity[index]--;
                    return updatedQuantity;
                });
                setPricePerItem(prevPricePerItem => {
                    const updatedPricePerItem = [...prevPricePerItem];
                    updatedPricePerItem[index] = updatedPricePerItem[index] - product[id-1].price;
                    return updatedPricePerItem;
                });
            } else {
                setCartItems(prevCartItems => {
                    const updatedCartItems = [...prevCartItems];
                    updatedCartItems.splice(index, 1);
                    return updatedCartItems;
                });
                setQuantity(prevQuantity => {
                    const updatedQuantity = [...prevQuantity];
                    updatedQuantity.splice(index, 1);
                    return updatedQuantity;
                });
                setPricePerItem(prevPricePerItem => {
                    const updatedPricePerItem = [...prevPricePerItem];
                    updatedPricePerItem.splice(index, 1);
                    return updatedPricePerItem;
                });
            }
        }
        setTotalPrice(prevTotalPrice => prevTotalPrice - product[id-1].price);
    };
    

    const handleAddToCart = (id) => {
        console.log("Adding item: " + id);
        const index = cartItems.indexOf(id);
        if (index !== -1) {
            setQuantity(prevQuantity => {
                const updatedQuantity = [...prevQuantity];
                updatedQuantity[index]++;
                return updatedQuantity;
            });
            setPricePerItem(prevPricePerItem => {
                const updatedPricePerItem = [...prevPricePerItem];
                updatedPricePerItem[index] = updatedPricePerItem[index] + product[id-1].price;
                return updatedPricePerItem;
            })
        } else {
            setCartItems(prevCartItems => [...prevCartItems, id]);
            setQuantity(prevQuantity => [...prevQuantity, 1]);
            setPricePerItem(prevPricePerItem => [...prevPricePerItem, product[id-1].price]);
        }
        setTotalPrice(prevTotalPrice => prevTotalPrice + product[id-1].price);
        console.log(cartItems);
        console.log(quantity);
    };
    

    return (
        <div className="product-page">
            <Header />
            <table>
                <tbody>
                    <tr>
                        <td><ProductList handleAddToCart={handleAddToCart} /></td>
                        <td style={{verticalAlign:'top'}}><Cart cartItems={cartItems} quantity={quantity} handleRemoveItem={handleRemoveItem} pricePerItem={pricePerItem} totalPrice={totalPrice} /></td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>
    ); 
}

export default Productpage;