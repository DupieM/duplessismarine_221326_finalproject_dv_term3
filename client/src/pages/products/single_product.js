import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';

function SingleProduct() {
    const [product, setProduct] = useState({
        make: '',
        model: '',
        price: 0,
        quantity: 0,
        capacity: 0,
        product_code: '',
        img: '',
        color_img1: '',
        color_img2: '',
        color_img3: '',
        color_img4: '',
        description: '',
        care_instructions: '',
        size: ''
    });

    const [qty, setQty] = useState(1); // Initialize quantity to 1

    const cid = localStorage.getItem('cupID');

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/cup/${cid}`)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [cid]);

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        setProduct({ ...product, selectedColor });
    };

    const handleQtyChange = (event) => {
        const newQty = parseInt(event.target.value, 10); // Parse the input value to an integer
        setQty(newQty);
    };

    const handleCart = () => {
        // Access product properties from the 'product' state and use them as needed
        const { _id, model, price, quantity } = product;


        // Create an object for the item to add to the cart
        const newItem = { id: _id, model, price, quantity, qty };

        // Check if 'cartItems' exists in localStorage
        let cartItems = localStorage.getItem('cartItems');

        if (!cartItems) {
            // If 'cartItems' doesn't exist, create a new array and add the item
            cartItems = [newItem];
        } else {
            // If 'cartItems' exists, parse it from JSON
            cartItems = JSON.parse(cartItems);

            // Check if the product already exists in the cart
            const existingItemIndex = cartItems.findIndex((item) => item.id === _id);

            if (existingItemIndex !== -1) {
                // If the product exists, update its quantity
                cartItems[existingItemIndex].qty += qty;
            } else {
                // If the product doesn't exist, add it to the cart
                cartItems.push(newItem);
            }
        }

        // Store the updated 'cartItems' array in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        console.log('Added to cart:', newItem);
    };

    return (
        <div className="App2">

            <br />

            <h2 style={{marginLeft: '220px', fontWeight: 'bold', color: '#5C3D4C', fontSize: '37pt', textAlign: 'left'}}>
                {product.model}, {product.capacity}ml
            </h2>

            <br />

            <img src={product.img} alt="travel mug" style={{height: '460px', marginLeft: '-670px'}} />

            <br />

            <div style={{border: '3px solid #09333E', width: '512px', height: '460px', textAlign: 'left' , marginLeft: '705px', marginTop: '-460px', padding: '15px', color: '#09333E'}}>
                <div>
                    <h3 style={{fontSize: '30pt', marginBottom: '10px'}}><b>Price:</b> R{product.price}</h3>
                    <h3 style={{marginBottom: '10px'}}>
                        <b style={{fontSize: '29pt', marginBottom: '10px'}}>Selected Colour:</b>
                        <select value={product.selectedColor} onChange={handleColorChange} style={{fontSize: '25pt'}}>
                            <option value={product.color_img1}>{product.color_img1}</option>
                            <option value={product.color_img2}>{product.color_img2}</option>
                            <option value={product.color_img3}>{product.color_img3}</option>
                            <option value={product.color_img4}>{product.color_img4}</option>
                        </select>
                    </h3>
                    <h3 style={{marginBottom: '10px'}}>
                        <b style={{fontSize: '29pt', marginBottom: '10px', marginRight: '10px'}}>Selected Size:</b>
                        <select value="" style={{fontSize: '25pt'}}>
                            <option value="">Small</option>
                            <option value="">Medium</option>
                            <option value="">Large</option>
                        </select>
                    </h3>
                    
                    <h3 style={{fontSize: '28pt', marginBottom: '10px'}}><b>Stock available:</b> {product.quantity}</h3>
                    <h3 style={{fontSize: '28pt'}}>
                        <b>Quantity:</b> <input type="number" name="qty" value={qty} onChange={handleQtyChange} style={{width: '50px'}} />
                    </h3>
                    <button 
                    style={{border: 'none', fontSize: '20pt', marginTop: '30px', fontWeight: 'bold', 
                    borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '200px', marginBottom:'30px', marginLeft: '130px'}}
                    onClick={handleCart}
                >
                    Add to cart
                </button>
                </div>
            </div>

            <br />

            <div style={{border: '3px solid #09333E', width: '1000px', textAlign: 'left', marginLeft: '220px', padding: '20px', color: '#09333E'}}>
                <h3>Product Info:</h3>
                <p>{product.description}</p>
                <h3>Care Instructions:</h3>
                <p>{product.care_instructions}</p>
                
            </div>

            <br />


            <footer>
                <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
                    <img src={icon3} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
                </div>
                <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
                    <p>
                        <img src={icon4} style={{width: '2%', marginRight: '10px'}}/>
                        otg.cups@gmail.com
                    </p>
                    <p>
                        <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
                        + 01 234 567 88
                    </p>
                </div>
                <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
                    <h6 class="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
                </div>
            </footer>


        </div>
    );
}

export default SingleProduct;
