import React, { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import axios from 'axios';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';

function Order() {

    // see if the user or admin is logged in


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders/')
          .then((res) => {
            setOrders(res.data)
          })
          .catch()
    });

    const handleDelete=(id)=>{
        axios.delete('http://localhost:5000/api/order/'+id)
    }

     // see if the user or admin is logged in

    // const [client, setClient] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/client/:id')
    //       .then((res) => {
    //         setClient(res.data.email)
    //       })
    //       .catch()
    // });

    // if (client == "admin@gmail.com"){
    //     return (
    //         <div className="App2">
    
    //         <br/>
    
    //         <h2 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Product Inventory</h2>
    
    //         <Link to={`/form`}>
    //             <img src={icon3}  alt="travel mug" style={{height: '48px', cursor: 'pointer'}}/>
    //         </Link>
    
    //         <div style={{marginTop: '40px', marginLeft: '40px', marginRight: '40px'}}>
    //             <Table bordered style={{textAlign: 'center'}}>
    //                 <thead>
    //                     <tr>
    //                         <th style={{width: '40px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Image
    //                         </th>
    //                         <th style={{width: '180px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Product name
    //                         </th>
    //                         <th style={{width: '160px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Prize
    //                         </th>
    //                         <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Quantity
    //                         </th>
    //                         <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Discount
    //                         </th>
    //                         <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Update
    //                         </th>
    //                         <th style={{width: '100px', border: '3px solid #055E6C', backgroundColor: '#418695', color: '#CABCB1', fontWeight: '700', fontSize: '16pt'}}>
    //                             Remove
    //                         </th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {products.map(product => {
    //                         return (
    //                             <tr>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
    //                                     <img src={product.img}  alt="travel mug" style={{height: '120px'}}/>
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
    //                                 {product.make},{product.model}
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
    //                                     R {product.price}
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
    //                                     {product.quantity}
    //                                     {/* <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/> */}
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
    //                                     {product.discount}%
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
    //                                     <Link to={`/update_inventory/${product._id}`}>
    //                                         {sessionStorage.setItem("pid", product._id)}
    //                                         <img src={icon2}  alt="travel mug" style={{height: '38px', cursor: 'pointer'}}/>
    //                                     </Link>
    //                                     {/* <img src={icon2}  alt="travel mug" style={{height: '38px', cursor: 'pointer'}} onClick={()=>handleUpdate(product._id)}/> */}
    //                                 </th>
    //                                 <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
    //                                     <img src={icon}  alt="travel mug" style={{height: '38px', cursor: 'pointer'}} onClick={()=>handleDelete(product._id)}/>
    //                                 </th>
    //                             </tr>
    //                         )
    //                     })}
    //                 </tbody>
    //             </Table>
    //         </div>
    
    //         <br/>
    
    //         <footer>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
    //                     <img src={icon4} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
    //                 </div>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
    //                     <p>
    //                         <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
    //                         otg.cups@gmail.com
    //                     </p>
    //                     <p>
    //                         <img src={icon6} style={{width: '2%', marginRight: '10px'}}/>
    //                         + 01 234 567 88
    //                     </p>
    //                 </div>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
    //                     <h6 class="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
    //                 </div>
    //             </footer>
    
    //         </div>
    //     )
    // } else if (client == "user@gmail.com") {
    //     return (
    //         <div className="App2">
    
    //         <br/>
    
    //         <h2 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Product Inventory</h2>
    
    //         <br/>
    
    //         <footer>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
    //                     <img src={icon4} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
    //                 </div>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
    //                     <p>
    //                         <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
    //                         otg.cups@gmail.com
    //                     </p>
    //                     <p>
    //                         <img src={icon6} style={{width: '2%', marginRight: '10px'}}/>
    //                         + 01 234 567 88
    //                     </p>
    //                 </div>
    //                 <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
    //                     <h6 class="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
    //                 </div>
    //             </footer>
    
    //         </div>
    //     )
    // }

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
                            <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#865E81', fontSize: '23pt', textAlign: 'left', marginLeft: '620px', marginTop: '-62px', cursor: 'pointer'}} onClick={()=>handleDelete(order._id)}>
                                Dispatch
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}

            <br/>

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
    )
}

export default Order;