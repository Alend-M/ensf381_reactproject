import React, { useState } from 'react';

const ProductItem = (props) => {
    const [hovering, setHovering] = useState(false);
    
    const handleMouseEnter = () => {
        setHovering(true);
    };
    
    const handleMouseLeave = () => {
        setHovering(false);
    };

    const handleAddToCart = () => {
        //NEED TO WORK ON THIS
    };

    return (
        <div className="product-item">
            <img src={props.image} alt={props.name} />
            <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{props.name}</h1>
            {hovering && <p>{props.description}</p>}
            <p>{props.price}</p>
            <button className="Add-To-Cart-Button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;