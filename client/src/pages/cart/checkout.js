import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';
import { useNavigate } from 'react-router-dom';

function Checkout() {
        const [cartcheckItems, setCartCheckItems] = useState([]);
        const [itemocartitems, setItemCartItems] = useState();


        useEffect(() => {
            // Retrieve cart items from localStorage
            const storedCartCheckItems = localStorage.getItem('cartItems');

            if (storedCartCheckItems) {
            // Parse the stored items from JSON
            setCartCheckItems(JSON.parse(storedCartCheckItems));
            setItemCartItems(JSON.parse(storedCartCheckItems));
            }
        }, []);

    // Calculate the total price of items in the cart
    const total = cartcheckItems.reduce((acc, item) => acc + item.price * item.qty, 0);

     // Calculate the total price of items in with shipping
     const total1 = cartcheckItems.reduce((acc, item) => total + 50, 0);


    const [itemusername, setItemUsername] = useState();
    const [itemordernumber, setItemOrder] = useState();
    const [itemnumber, setItemNumber] = useState();

    const navigate = useNavigate();


    // Create order
    const addOrder = (e) => {

        let payload = { username: itemusername, cartItems: itemocartitems, order_number: itemordernumber, number: itemnumber}
        axios.post('http://localhost:5000/api/order', payload)
        .then()
        .catch()

        navigate('/product');

    };

    // create number id
    const generatenumber = () => {
        const between = ( min,max ) =>{
            return Math.floor(
                Math.random() * (max - min) + min
            )  
        }
        console.log(between(9,15));

        setItemNumber(between(9,15));
    }

    // create order id
    const generateordernum = () => {
        const between = ( min,max ) =>{
            return Math.floor(
                Math.random() * (max - min) + min
            )  
        }
        console.log(between(400000,500000));

        setItemOrder(between(400000,500000));
    }
    
    // clear local storage
    const handleclear = () =>{
        localStorage.removeItem("cartItems");
    }

    return (
        <div className="App3">

            <br/>

            <div style={{border: '4px solid black', width: '1300px', marginLeft: '140px', marginBottom: '20px'}}>
                <form onSubmit={addOrder}>
                    <div>
                        <h1 style={{marginLeft: '30px', fontSize: '40pt', fontWeight: 'bold', color: '#09333E', textAlign: 'center'}}>Checkout</h1>
                        
                        <br/>
                        
                        <h3 style={{marginLeft: '70px', fontSize: '26pt', textDecoration: 'underline', color: '#09333E'}}>Shipping Details:</h3>
                        <div style={{marginLeft: '70px'}}>
                            <input type="text" placeholder="Address 1" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '270px'}}/><br/>
                            <input type="text" placeholder="Adress 2" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '270px'}}/><br/>
                            <input type="text" placeholder="City" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '270px'}}/><br/>
                            <input type="text" placeholder="province" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', width: '270px'}}/><br/>
                        </div>
                        
                        <div style={{marginLeft: '70px', marginTop: '10px', marginBottom: '10px', fontWeight: 'bold', color: '#09333E'}}>
                            <label>Please enter username again for order</label><br/>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                onChange={(e => setItemUsername(e.target.value))} 
                                onClick={() => {generateordernum();generatenumber()}} 
                                style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#6EA4C7', marginBottom: '9px', width: '270px'}}
                            />
                        </div>

                        <h3 style={{marginLeft: '70px', fontSize: '26pt', textDecoration: 'underline', color: '#09333E'}}>Payment Details:</h3>
                        <div style={{marginLeft: '70px'}}>
                            <input type="number" placeholder="Card number" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '270px'}}/><br/>
                            <input type="text" placeholder="Name on Card" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '270px'}}/><br/>
                            <input type="date" placeholder="expiray date" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', marginRight: '9px', width: '140px'}}/>
                            <input type="number" placeholder="Security Pin" style={{fontSize: '13pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', width: '120px'}}/><br/>
                            
                            <button style={{marginLeft: '80px', backgroundColor: '#055E6C', color: '#CABCB1', border: 'none', borderRadius: '7px', padding: '5px'}}>Make Payment</button>
                        </div>
                    </div>
                    
                    <div style={{marginLeft: '500px', marginTop: '-530px', marginRight: '50px'}}>
                        <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline', color: '#09333E'}}>Your Order:</h3>

                        {cartcheckItems.map((item) => (
                            <div key={item.id}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th style={{backgroundColor: '#6298A4', color: '#0C4654', width: '560px'}}>
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
                        ))}

                        <div style={{textAlign: 'right', color: '#09333E'}}>
                            <h3>Subtotal: R{total.toFixed(0)}</h3>
                            <h3>Shipping: R50</h3>
                            <h3>Total: R{total1.toFixed(0)}</h3>
                        </div>
                        
                        <button 
                            style={{ border: 'none', fontSize: '20pt', marginTop: '90px', fontWeight: 'bold', 
                            borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '230px', marginLeft: '70px'}}
                            onClick={handleclear}
                        >
                            Create Order
                        </button>
                        
                    </div>
                    <br/>
                </form>
            </div>

            <br/>

            <footer>
                <div style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
                    <img src={icon3} style={{width: '6%',marginRight: "-50px", marginBottom: '9px', marginTop: '20px', marginLeft: '100px'}}/>
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
    )
}

export default Checkout;