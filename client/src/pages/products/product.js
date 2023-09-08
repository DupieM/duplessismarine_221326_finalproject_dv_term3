import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';

function Product() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
          .then((res) => {
            setProducts(res.data)
          })
          .catch()
    });

    const handleSingle = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/single_product";
    };

    const filterSelection1 = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/brand_product";
    };

    const filterSelection2 = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/color_product";
    };

    const filterSelection3 = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/price_product";
    };

    const filterSelection4 = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/size_product";
    };

    return (
        <div className="App2">

            <br/>

            <h2 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Travel Mugs, Bottles & Flasks</h2>

            <br/>
            <br/>

            <Accordion style={{}}>
                <Accordion.Item eventKey="0" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Brand</Accordion.Header>
                    <Accordion.Body>
                        <select >
                            <option value="Bodum" style={{cursor: 'pointer'}}>Bodum</option>
                            <option value="" style={{cursor: 'pointer'}}>Built</option>
                            <option value="" >Carrol boyes</option>
                            <option value="" >DeLonghi</option>
                            <option value="" >Ecoffee Cup</option>
                            <option value="" >Eva Solo</option>
                            <option value="" >Joseph Joseph</option>
                            <option value="" >KeepCup</option>
                            <option value="" >Kulgo</option>
                            <option value="" >Le Creuset</option>
                            <option value="" >Mepal</option>
                            <option value="" >MiiR</option>
                            <option value="" >Sengetti</option>
                            <option value="" >W & P</option>
                            <option value="" >Zoku</option>
                        </select>
                    </Accordion.Body>  
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Prize</Accordion.Header>
                    <Accordion.Body>
                        <option value="" onClick={filterSelection3} style={{cursor: 'pointer'}}>R100 to R250</option>
                        <option value="" >R300 to R450</option>
                        <option value="" >R500 to R650</option>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Size</Accordion.Header>
                    <Accordion.Body>
                        <option value="" onClick={filterSelection4} style={{cursor: 'pointer'}}>Small</option>
                        <option value="" >Medium</option>
                        <option value="" >Large</option> 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{width: '200px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Color</Accordion.Header>
                    <Accordion.Body>
                        <option value="" onClick={filterSelection2} style={{cursor: 'pointer'}}>Mint</option>
                        <option value="" >Green</option>
                        <option value="" >Blue</option>
                        <option value="" >Pink</option>
                        <option value="" >White</option>
                        <option value="" >Grey</option>
                        <option value="" >Black</option> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Container style={{marginLeft: '216px', marginTop: '-270px'}}>
                <Row>
                {products.map(product => {
                        return (
                                <Col key={product._id}>
                                    <Card style={{width: '270px', height: '430px', marginLeft: '28px', marginBottom: '30px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px'}}>
                                        <img src={product.img}  alt="cup" style={{width: '250px'}}/>
                                            <Card.Body style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                                <Card.Title style={{fontSize: '17pt', marginTop: '1px', color: '#0C4654'}}>{product.model}</Card.Title>
                                                <Card.Text style={{fontSize: '17pt', marginTop: '10px', color: '#0C4654'}}>R {product.price}</Card.Text>
                                            </Card.Body>
                                            <button style={{marginBottom: '10px'}} onClick={() => handleSingle(product._id)}>
                                                View
                                            </button>
                                    </Card>
                                    
                                </Col>
                        )
                        })}
                </Row>
            </Container>

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

export default Product;