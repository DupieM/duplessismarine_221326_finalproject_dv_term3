import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Cart() {

    const [productModel, setProductModel] = useState();
    const [productPrice, setProductPrice] = useState();

    const [product, setProducts] = useState([]);

    const caid =  sessionStorage.getItem("cupCID");

    useEffect(() => {
        let payload = { model: productModel, price: productPrice }
        axios.get('http://localhost:5000/api/cup/' + caid, payload)
        .then((res) => {
            setProducts(res.data)
            console.log(setProducts)
        })
        .catch()
    });

   return (
    <div className="App2">

        <br/>

        <div style={{border: '4px solid black', width: '1300px', marginLeft: '140px'}}>
        
            <h1 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Items in your Cart</h1>

            <br/>

            <h2>{product.model}</h2>
            <h2>Quantity</h2>
            <h2>R{product.price}</h2>


            <h3>Total:</h3>

            <button>
                Checkout
            </button>

        </div>

        <br/>

    </div>
   )
}

export default Cart;