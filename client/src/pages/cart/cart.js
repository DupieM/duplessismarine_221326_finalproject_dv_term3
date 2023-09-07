import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart items from localStorage
        const storedCartItems = localStorage.getItem('cartItems');

        if (storedCartItems) {
        // Parse the stored items from JSON
        setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Calculate the total price of items in the cart
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    const navigate = useNavigate()

    const handlecheckout = () =>{
        navigate('/checkout');
    }

    return (
        <div className="App2">
        <br />
        <div style={{ border: '4px solid black', width: '1300px', marginLeft: '140px' }}>
            <h1 style={{ fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt' }}>Items in your Cart</h1>
            <br />
            {cartItems.map((item) => (
            <div key={item.id}>
                <h2>{item.model}</h2>
                <h2>Quantity: {item.qty}</h2>
                <h2>R{item.price}</h2>
            </div>
            ))}
            <h3>Total: R{total.toFixed(2)}</h3>
            <button onClick={handlecheckout}>Checkout</button>
        </div>
        <br />
        </div>
    );
}

export default Cart;
