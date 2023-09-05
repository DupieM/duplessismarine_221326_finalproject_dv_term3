import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Checkout() {
    return (
        <div className="App3">

            <br/>

            <div style={{border: '4px solid black', width: '1300px', marginLeft: '140px'}}>
                <h1 style={{marginLeft: '30px', fontSize: '40pt', fontWeight: 'bold'}}>Checkout</h1>
                <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline'}}>Shipping Details:</h3>
                <p></p>
                <h3 style={{marginLeft: '30px', fontSize: '26pt', textDecoration: 'underline'}}>Payment Details:</h3>
                <input/>
                <input/>
                <input/>
                <input/>
            </div>
        </div>
    )
}

export default Checkout;