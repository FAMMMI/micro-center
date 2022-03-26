import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import RandomProduct from '../RandomProduct/RandomProduct';
import "./Laptops.css"

const Laptops = () => {

    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState([]);
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

    const handleChoose = (laptop) => {
        let idString = laptop.id;
        let id = +idString;
        const value = Math.floor(Math.random(id) * 11);
        return value;
    }


    const handleReset = () => {
        const newCart = [];
        setCart(newCart);
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
                        ></Cart>)
                }
                <div>
                    <div className='cart-btn'>
                        <button onClick={() => handleChoose}>
                            <p className='cart-btn-text '>Choose one for me</p>
                        </button>
                        <button onClick={handleReset}>
                            <p className='cart-btn-text'>Clear All</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Laptops;