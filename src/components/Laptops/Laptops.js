import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import "./Laptops.css"

const Laptops = () => {

    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setLaptops(data));
    }, []);

    const handleAddToCart = (laptop) => {
        // console.log(laptop);
        const newCart = [...cart, laptop];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className='laptops-container'>
                {
                    laptops.map(laptop =>
                        <Laptop
                            key={laptop.id}
                            laptop={laptop}
                            handleAddToCart={handleAddToCart}
                        ></Laptop>
                    )
                }
            </div>
            <div className='cart-container'>
                <h3 className='cart-header'>Order Summary</h3>
                {

                    cart.map(laptop =>
                        <Cart
                            key={laptop.id}
                            cart={laptop}
                        ></Cart>)
                }
                <div className='cart-btn'>
                    <button>
                        <p className='cart-btn-text '>Choose one for me</p>
                    </button>
                    <button>
                        <p className='cart-btn-text'>Clear All</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Laptops;