import React, { useState } from 'react';

const ProductItem = ({product , handleAddToCart}) => {
    const [hovering, setHovering] = useState(false);
    
    const handleMouseEnter = () => {
        setHovering(true);
    };
    
    const handleMouseLeave = () => {
        setHovering(false);
    };

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{product.name}</h1>
            {hovering && <p>{product.description}</p>}
            <p>{product.price}</p>
            <button className="Add-To-Cart-Button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;