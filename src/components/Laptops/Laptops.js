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
        console.log(laptop);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Laptops;