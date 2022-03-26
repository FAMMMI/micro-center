import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import RandomProduct from '../RandomProduct/RandomProduct';
import "./Laptops.css"

const Laptops = () => {

    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomItems, setRandomItems] = useState([]);


    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setLaptops(data));
    }, []);


    const handleAddToCart = (laptop) => {
        let newCart = [];
        const exists = cart.find(product => product.id === laptop.id)
        if (!exists) {
            console.log(laptop);
            newCart = [...cart, laptop];
            setCart(newCart);
        }
        else {
            return;
        }
    }

    const randomItem = (newCart) => {
        const NewItem = newCart[Math.floor(Math.random() * newCart.length)];
        let arr = [];
        arr.push(NewItem);
        setRandomItems(arr);
    }


    const handleReset = () => {
        const newCart = [];
        setRandomItems(newCart);
        setCart(newCart);
    }



    return (
        <div className='shop ' >
            <div className='laptops-container '>
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
            <div className='cart-container '>
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
                        <button onClick={() => randomItem(cart)}>
                            <p className='cart-btn-text '>Choose one for me</p>
                        </button>
                        <button onClick={handleReset}>
                            <p className='cart-btn-text'>Clear All</p>
                        </button>
                    </div>
                </div>
                <RandomProduct
                    randomItems={randomItems}
                ></RandomProduct>

            </div>
        </div>
    );
};

export default Laptops;