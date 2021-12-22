import React from 'react';


const Cart = ({products, toCart}) => {



    return (
        <div className="cartBox d-flex s-around al-center">
            <div>
            <img src={products[toCart].image} alt=""/>
            </div>
            <div>{products[toCart].title}</div>
            <div>Quantity</div>
            <div>{products[toCart].price}</div>
        </div>
    );
};

export default Cart;