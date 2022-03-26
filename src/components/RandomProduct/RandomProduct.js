import React from 'react';
import './Randomproduct.css'

const RandomProduct = (props) => {
    console.log(props)

    if (props.randomItems[0] !== undefined) {

        const { name, img, price } = props.randomItems[0];
        console.log(name);
        return (
            <div className='Random-Item'>
                <img src={img} alt="" width="200px" />
                <h5>{name}</h5>
                <h5>Price: {price}</h5>
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }
};

export default RandomProduct;