import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Checkout() {
        const [cartcheckItems, setCartCheckItems] = useState([]);

        useEffect(() => {
            // Retrieve cart items from localStorage
            const storedCartCheckItems = localStorage.getItem('cartItems');

            if (storedCartCheckItems) {
            // Parse the stored items from JSON
            setCartCheckItems(JSON.parse(storedCartCheckItems));
            }
        }, []);

    // Calculate the total price of items in the cart
    const total = cartcheckItems.reduce((acc, item) => acc + item.price * item.qty, 0);

     // Calculate the total price of items in with shipping
     const total1 = cartcheckItems.reduce((acc, item) => acc + item.price * item.qty + 50, 0);


    const [itemusername, setItemUsername] = useState();
    const [itemcartmodel, setItemCartModel] = useState();
    const [itemcartqty, setItemCartQty] = useState();
    const [itemcartprice, setItemCartPrice] = useState();
    const [itemordernumber, setItemOrder] = useState();

    
    const addOrder = (e) => {

        // setItemCartModel = sessionStorage.getItem("itemmodel");

        // console.log(setItemCartModel)

        let payload = { username: itemusername, model: itemcartmodel, qty: itemcartqty, price: itemcartprice}
        axios.post('http://localhost:5000/api/order', payload)
        .then()
        .catch()

    };

    // create order id
    const between = ( min,max ) =>{
        return Math.floor(
            Math.random() * (max - min) + min
        )

    }
    console.log(
        between(400000,500000)
    )

    return (
        <div className="App3">

            <br/>

            <div style={{border: '4px solid black', width: '1300px', marginLeft: '140px', marginBottom: '40px'}}>
                <form onSubmit={addOrder}>
                    <div>
                        <h1 style={{marginLeft: '30px', fontSize: '40pt', fontWeight: 'bold'}}>Checkout</h1>
                        <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline'}}>Shipping Details:</h3>
                        <input type="text" placeholder="Address 1"/><br/>
                        <input type="text" placeholder="Adress 2"/><br/>
                        <input type="text" placeholder="City"/><br/>
                        <input type="text" placeholder="province"/><br/>

                        <label>Please enter username again for order</label><br/>
                        <input type="text" placeholder="username" onChange={(e => setItemUsername(e.target.value))}/>

                        <br/>
                        <br/>

                        <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline'}}>Payment Details:</h3>
                        <input type="number" placeholder="Card number"/><br/>
                        <input type="text" placeholder="Name on Card"/><br/>
                        <input type="date" placeholder="expiray date"/><br/>
                        <input type="number" placeholder="Security Code"/>
                    </div>
                    
                    <div style={{marginLeft: '600px', marginTop: '-410px', marginRight: '30px'}}>
                        <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline'}}>Your Order:</h3>

                        {cartcheckItems.map((item) => (
                            // sessionStorage.setItem("itemmodel", item.model),
                            // sessionStorage.setItem("itemqty", item.qty),
                            // sessionStorage.setItem("itemprice", item.price),
                            <div key={item.id}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th style={{backgroundColor: '#6298A4', color: '#0C4654'}}>
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

                        <div style={{}}>
                            <h3>Subtotal: R{total.toFixed(0)}</h3>
                            <h3>Shipping: R50</h3>
                            <h3>Total: R{total1.toFixed(0)}</h3>
                        </div>
                        
                        <button>Create Order</button>
                        
                    </div>
                    <br/>
                </form>

            </div>

            <br/>

        </div>
    )
}

export default Checkout;