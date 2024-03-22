import ProductItem from './ProductItem';
import ProductsData from '../data/products.json';

const ProductList = () => {
    return (
        <div className="product-list">
            {ProductsData.map((product) => (
                <ProductItem product={product}/>
            ))}
        </div>
    );
};

export default ProductList;