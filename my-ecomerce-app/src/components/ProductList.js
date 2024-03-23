import ProductItem from './ProductItem';
import ProductsData from '../data/products.js';

const ProductList = ({handleAddToCart}) => {
    
    return (
        <div className="product-list">
            {ProductsData.map((product) => (
                <ProductItem product={product} handleAddToCart={handleAddToCart()}/>
            ))}
        </div>
    );
};

export default ProductList;