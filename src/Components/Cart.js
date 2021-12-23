import React, {useState} from 'react';
import {logDOM} from "@testing-library/react";


const Cart = ({products, toCart, boughtProducts, productQty}) => {



    const [setPrice, getPrice]= useState(0)

    console.log(toCart)

    return (
        <div>
            {boughtProducts.map((x, index) =>
                    <div  key={index} className="cartBox d-flex s-around al-center">
                        <div>
                            <img src={x.image} alt=""/>
                        </div>
                        <div>{x.title}</div>
                        <div>Quantity{x.quantity}</div>
                        <div>{x.price}</div>
                    </div>
            )}
            <div className="d-flex s-around">
            <div>Total Qty{productQty}</div>
            <div>Total sum{}</div>
            </div>
        </div>
    );
};

export default Cart;