import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import {useState} from "react";



const products = [
    {
        image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
        title: "green chair",
        price: 35.38
    },
    {
        image: "https://www.barkerandstonehouse.co.uk/media/catalog/product/cache/32bb16d7b9f3e53c79da893faf5e8936/t/i/tim77783stdf_1_zoom.jpg",
        title: "simple chair",
        price: 19.99
    },
    {
        image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
        title: "fotelis chair",
        price: 55
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg",
        title: "Boss chair",
        price: 128
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
        title: "king chair",
        price: 88.25
    },
]


function App() {


    const [getProductIndex, setProductIndex]= useState(0)
    const [getWindow, setWindow] = useState(1)
    const [getQnt, setQnt] = useState(0)
    const [getBoughtList, setBoughtList] = useState([])

    function Buy(num) {
        setProductIndex(num)
        setQnt(getQnt + 1)
        setBoughtList([...getBoughtList, products[num]])
    }

    function changeWindow(n){
    setWindow(n)
    }


    return (
        <div className="App">
            <div className="toolbar d-flex s-around">
                <h3 onClick={() => changeWindow(1)}>Home</h3>
                <h3 onClick={() => changeWindow(2)}>Shop</h3>
                <h3 onClick={() => changeWindow(3)}>Cart <span className="span"> {getQnt}</span></h3>
            </div>
            {getWindow === 1 && <Home/>}
            {getWindow === 2 && <Shop products={products} BoughtProduct={Buy}/>}
            {getWindow === 3 && <Cart products={products} toCart={getProductIndex} boughtProducts={getBoughtList}/>}
        </div>
    );
}

export default App;
