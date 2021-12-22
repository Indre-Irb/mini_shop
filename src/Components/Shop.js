import React from 'react';


const Shop = ({products, BoughtProduct}) => {


    return (
        <div  className="d-flex f-wrap flex-1">
            {products.map((x, index) =>
                <div className="productsBox d-flex f-column j-center al-center" key={index}>
                <img src={x.image} alt=""/>
                    <div>{x.title}</div>
                    <div>{x.price}</div>
                    <button onClick={() => BoughtProduct(index)}>Add to Cart</button>
                </div>
            )}
        </div>
    );
};

export default Shop;