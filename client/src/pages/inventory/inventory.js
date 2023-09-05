import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import icon from './trash-2.png';
import axios from 'axios';

function Inventory() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
          .then((res) => {
            setProducts(res.data)
          })
          .catch()
    });

    
    return (
        <div className="App2">

        <br/>

        <h2 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Product Inventory</h2>

        <div style={{marginTop: '40px', marginLeft: '40px', marginRight: '40px'}}>
            <Table bordered style={{textAlign: 'center'}}>
                <thead>
                    <tr>
                        <th style={{width: '40px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
                            Image
                        </th>
                        <th style={{width: '180px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
                            Product name
                        </th>
                        <th style={{width: '160px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
                            Prize
                        </th>
                        <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
                            Quantity
                        </th>
                        <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr>
                                <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                                    <img src={product.img}  alt="travel mug" style={{height: '120px'}}/>
                                </th>
                                <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                                    {product.make}, {product.model}
                                </th>
                                <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                                    R {product.price}
                                </th>
                                <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                                    {product.quantity}
                                    {/* <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/> */}
                                </th>
                                <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                                    <img src={icon}  alt="travel mug" style={{height: '38px'}}/>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>

        <br/>

        </div>
    )
}

export default Inventory;