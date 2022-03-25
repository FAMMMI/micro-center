import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart.name);
    const { name, img } = cart

    return (
        <div className='cart'>
            <img src={img} alt="" />
            <p>Name: {name}</p>
        </div>
    );
};

export default Cart;