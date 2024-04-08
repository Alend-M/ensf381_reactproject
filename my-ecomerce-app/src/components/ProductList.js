import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";



const ProductList = ({ handleAddToCart }) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then(response => response.json())
			.then(data => {
				setProducts(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					handleAddToCart={() => handleAddToCart(product.id)}
				/>
			))}
		</div>
	);
};

	export default ProductList;