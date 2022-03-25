import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import "./Laptops.css"

const Laptops = () => {

    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState([]);
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

    const handleChoose = (laptop) => {
        console.log(laptop)
        const newItem = [...item, laptop];
        setItem(newItem);
    }

    /* const handleChoose = (laptop) => {
        console.log()
        let idString = laptop.id;
        let id = +idString;
        const value = Math.floor(Math.random(id) * 11)
        return value;

    } */

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
                        // handleChoose={handleChoose}
                        ></Cart>)
                }
                <div className='cart-btn'>
                    <button onClick={handleChoose}>
                        <p className='cart-btn-text '>Choose one for me</p>
                    </button>
                    <button >
                        <p className='cart-btn-text'>Clear All</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Laptops;