import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import axios from 'axios';

function Order() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders/')
          .then((res) => {
            setOrders(res.data)
          })
          .catch()
    });



    return (
        <div className="App2">

            <br/>

            <h2 style={{marginLeft: '70px', fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Incoming Orders</h2>

            <br/>


            {orders.map(order => {
                return (
                    <Card style={{width: '820px', height: '90px', marginLeft: '388px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px', marginBottom: '20px'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '20pt', marginTop: '1px', color: '#0C4654', fontSize: '28pt', textAlign: 'left'}}>
                                {order.number}
                            </Card.Title>
                            <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#0C4654', fontSize: '23pt', textAlign: 'left', marginLeft: '130px', marginTop: '-54px'}}>
                                {order.username}
                            </Card.Text>
                            <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#0C4654', fontSize: '20pt', textAlign: 'left', marginLeft: '380px', marginTop: '-57px'}}>
                                {order.order_number}
                            </Card.Text>
                            <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#865E81', fontSize: '23pt', textAlign: 'left', marginLeft: '620px', marginTop: '-62px'}}>
                                Dispatch
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}

            <br/>
            
        </div>
    )
}

export default Order;