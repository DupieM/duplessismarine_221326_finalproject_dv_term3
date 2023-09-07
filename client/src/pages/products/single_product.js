import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="App">
        <br />
        <h2 style={{ marginLeft: '150px', fontWeight: 'bold', color: '#5C3D4C', fontSize: '37pt' }}>
            {product.model}, {product.capacity}ml
        </h2>
        <img src={product.img} alt="travel mug" style={{ height: '430px' }} />
        <br />
        <div style={{ border: '4.5px solid black', width: '500px' }}>
            <div>
            <h3>Prize: R{product.price}</h3>
            <h3>
                Selected Color:
                <select value={product.selectedColor} onChange={handleColorChange}>
                <option value={product.color_img1}>{product.color_img1}</option>
                <option value={product.color_img2}>{product.color_img2}</option>
                <option value={product.color_img3}>{product.color_img3}</option>
                <option value={product.color_img4}>{product.color_img4}</option>
                </select>
            </h3>
            <h4>Order Number: {product.product_code}</h4>
            <h3>Stock: {product.quantity}</h3>
            <h3>
                Quantity: <input type="number" name="qty" value={qty} onChange={handleQtyChange} style={{ width: '50px' }} />
            </h3>
            <button onClick={handleCart}>Add To Cart</button>
            </div>
        </div>
        <br />
        <div style={{ border: '4.5px solid black', width: '1200px' }}>
            <h3>Product Info:</h3>
            <p>{product.description}</p>
            <h3>Care Instructions:</h3>
            <p>{product.care_instructions}</p>
        </div>
        </div>
    );
}

export default SingleProduct;
