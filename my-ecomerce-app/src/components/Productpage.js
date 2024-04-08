import React, {useState, useEffect}from 'react';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';


const Productpage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [pricePerItem, setPricePerItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        const storedQuantity = JSON.parse(localStorage.getItem('quantity'));
        const storedPricePerItem = JSON.parse(localStorage.getItem('pricePerItem'));
        const storedTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    
        if (storedCartItems && storedQuantity && storedPricePerItem && storedTotalPrice) {
            setCartItems(storedCartItems);
            setQuantity(storedQuantity);
            setPricePerItem(storedPricePerItem);
            setTotalPrice(storedTotalPrice);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            reRoute();
        }
    }, []);

    
    const navigate = useNavigate();

	function reRoute() {
		navigate("/Login");
	}
    
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            localStorage.setItem('quantity', JSON.stringify(quantity));
            localStorage.setItem('pricePerItem', JSON.stringify(pricePerItem));
            localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        }
    }, [cartItems, quantity, pricePerItem, totalPrice, loading]);
    
    

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
                    updatedPricePerItem[index] = updatedPricePerItem[index] - products[id-1].price;
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
        setTotalPrice(prevTotalPrice => prevTotalPrice - products[id-1].price);
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
                updatedPricePerItem[index] = updatedPricePerItem[index] + products[id-1].price;
                return updatedPricePerItem;
            })
        } else {
            setCartItems(prevCartItems => [...prevCartItems, id]);
            setQuantity(prevQuantity => [...prevQuantity, 1]);
            setPricePerItem(prevPricePerItem => [...prevPricePerItem, products[id-1].price]);
        }
        setTotalPrice(prevTotalPrice => prevTotalPrice + products[id-1].price);
        console.log(cartItems);
        console.log(quantity);
    };
    

    return (
        <div className="product-page">
            <table>
                <tbody>
                    <tr>
                        <td><ProductList handleAddToCart={handleAddToCart} products={products}/></td>
                        <td style={{verticalAlign:'top'}}><Cart cartItems={cartItems} quantity={quantity} handleRemoveItem={handleRemoveItem} pricePerItem={pricePerItem} totalPrice={totalPrice} products={products}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    ); 
}

export default Productpage;
