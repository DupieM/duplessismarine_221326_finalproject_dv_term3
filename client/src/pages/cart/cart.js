import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';

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

    const navigate = useNavigate();

    // Naviagte to checkout Page
    const handlecheckout = () =>{
        navigate('/checkout');
    }

    return (
        <div className="App2">
            <br />

            <div style={{ border: '4px solid black', width: '1300px', marginLeft: '140px', marginBottom: '110px', marginTop: '100px'}}>
                <h1 style={{ fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt' }}>Items in your Cart</h1>
                <br />
                {cartItems.map((item) => (
                <div key={item.id}>
                    <div key={item.id}>
                        <Table style={{width: '900px', marginLeft: '180px'}}>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor: '#6298A4', color: '#0C4654', textAlign: "left", width: '600px'}}>
                                        <h2 name="model" style={{fontSize: '20pt'}}>{item.model}</h2>
                                    </th>
                                    <th style={{backgroundColor: '#6298A4', color: '#0C4654', textAlign: 'center'}}>
                                        <h2 name="quantity" style={{fontSize: '20pt'}}>Qty: {item.qty}</h2>
                                    </th>
                                    <th style={{backgroundColor: '#6298A4', color: '#0C4654', textAlign: 'right'}}>
                                        <h2 name="price" style={{fontSize: '20pt'}}>R{item.price}</h2>
                                    </th>
                                </tr>
                            </thead>
                        </Table>
                    </div>
                </div>
                ))}
                <h3 style={{textAlign: 'right', marginRight: '220px', color: '#0C4654'}}>Total: R{total.toFixed(0)}</h3>
                <button 
                    style={{ border: 'none', fontSize: '20pt', marginTop: '10px', fontWeight: 'bold', 
                    borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '230px', marginBottom:'30px'}}
                    onClick={handlecheckout}
                >
                    Checkout
                </button>

            </div>
            <br />

            <footer>
                <div  style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
                    <img src={icon3} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
                </div>
                <div  style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
                    <p>
                        <img src={icon4} style={{width: '2%', marginRight: '10px'}}/>
                        otg.cups@gmail.com
                    </p>
                    <p>
                        <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
                        + 01 234 567 88
                    </p>
                </div>
                <div  style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
                    <h6 className="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
                </div>
            </footer>

        </div>
    );
}

export default Cart;
