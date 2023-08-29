import React from "react";
import Table from 'react-bootstrap/Table';
import icon from './trash-2.png';

function Inventory() {


    
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
                    <tr>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="travel mug" style={{height: '120px'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            Product 1
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            R*****
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <img src={icon}  alt="travel mug" style={{height: '38px'}}/>
                        </th>
                    </tr>
                    <tr>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="travel mug" style={{height: '120px'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            Product 2
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            R*****
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <img src={icon}  alt="travel mug" style={{height: '38px'}}/>
                        </th>
                    </tr>
                    <tr>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="travel mug" style={{height: '120px'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            Product 3
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            R*****
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <img src={icon}  alt="travel mug" style={{height: '38px'}}/>
                        </th>
                    </tr>
                    <tr>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="travel mug" style={{height: '120px'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            Product 4
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            R*****
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <input type="number" name="age" style={{width: '30px', backgroundColor: '#CABCB1', border: 'none'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', paddingTop: '50px'}}>
                            <img src={icon}  alt="travel mug" style={{height: '38px'}}/>
                        </th>
                    </tr>
                    <tr>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}>
                            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="travel mug" style={{height: '120px'}}/>
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA', color: '#0C4654', fontWeight: '700', fontSize: '16pt', paddingTop: '50px'}}>
                            More will be added
                        </th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}></th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}></th>
                        <th style={{border: '3px solid #055E6C', backgroundColor: '#869CAA'}}></th>
                    </tr>
                </tbody>
            </Table>
        </div>

        <br/>

        </div>
    )
}

export default Inventory;