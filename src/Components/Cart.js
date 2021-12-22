import React, {useState} from 'react';


const Cart = ({products, toCart, boughtProducts}) => {

    console.log(toCart)
    const [getQuantity, setQuantity] = useState(1)


    return (
        <div>
            {boughtProducts.map((x, index) =>

                    <div  key={index} className="cartBox d-flex s-around al-center">
                        <div>
                            <img src={x.image} alt=""/>
                        </div>
                        <div>{x.title}</div>
                        <div>Quantity {getQuantity}</div>
                        <div>{x.price}</div>
                    </div>
            )}
            <div className="d-flex s-around">
            <div>Total Qty{}</div>
            <div>Total sum{}</div>
            </div>
        </div>
    );
};

export default Cart;