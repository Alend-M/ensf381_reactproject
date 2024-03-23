import ProductItem from './ProductItem';
import ProductsData from '../data/products.js';

const ProductList = ({handleAddToCart}) => {
    
    return (
        <div className="product-list">
            {ProductsData.map((product) => (
                <ProductItem key={product.id} product={product} handleAddToCart={() => handleAddToCart(product.id)}/>
            ))}
        </div>
    );
};

export default ProductList;