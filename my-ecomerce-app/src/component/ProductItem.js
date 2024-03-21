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
        <div className="product-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            {hovering && <p>{props.description}</p>}
            <p>{props.price}</p>
            <button className="Add-To-Cart-Button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}