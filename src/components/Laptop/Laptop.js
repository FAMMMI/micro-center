import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Laptop.css"

const Laptop = ({ laptop, handleAddToCart }) => {

    const { name, img, price } = laptop;
    // console.log(name);
    return (
        <div className='laptop'>
            <img src={img} alt="" />
            <div className='laptop-info'>
                <h4 className='laptop-name'>Name: {name}</h4>
                <h5>Price: {price}</h5>
            </div>
            <button onClick={() => handleAddToCart(laptop)}
                className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;