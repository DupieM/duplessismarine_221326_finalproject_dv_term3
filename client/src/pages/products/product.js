import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import PropductCard from "./product_card";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';

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
                        <ul style={{listStyleType: 'none'}}>
                            <li>Bodum</li>
                            <li>Built</li>
                            <li>Carrol boyes</li>
                            <li>DeLonghi</li>
                            <li>Ecoffee Cup</li>
                            <li>Eva Solo</li>
                            <li>Joseph Joseph</li>
                            <li>KeepCup</li>
                            <li>Kulgo</li>
                            <li>Le Creuset</li>
                            <li>Mepal</li>
                            <li>MiiR</li>
                            <li>Sengetti</li>
                            <li>W&P</li>
                            <li>Zoku</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Prize</Accordion.Header>
                    <Accordion.Body>
                        <ul style={{listStyleType: 'none'}}>
                            <li>R100 to R250</li>
                            <li>R300 to R450</li>
                            <li>R500 to R650</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Size</Accordion.Header>
                    <Accordion.Body>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Small</li>
                            <li>Medium</li>
                            <li>Large</li>
                        </ul> 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{width: '200px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Color</Accordion.Header>
                    <Accordion.Body>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Red</li>
                            <li>Orrange</li>
                            <li>Yellow</li>
                            <li>Blue</li>
                            <li>Green</li>
                            <li>Pink</li>
                            <li>Natural</li>
                            <li>Greys</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Container style={{marginLeft: '216px', marginTop: '-270px'}}>
                <Row>
                {products.map(product => {
                        return (
                                <Col key={product._id}>
                                    <Card style={{width: '270px', height: '410px', marginLeft: '28px', marginBottom: '30px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px'}}>
                                        <img src={product.img}  alt="cup" style={{width: '250px'}}/>
                                            <Card.Body style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                                <Card.Title style={{fontSize: '17pt', marginTop: '1px', color: '#0C4654'}}>{product.model}</Card.Title>
                                                <Card.Text style={{fontSize: '17pt', marginTop: '10px', color: '#0C4654'}}>R {product.price}</Card.Text>
                                            </Card.Body>
                                            <button onClick={() => handleSingle(product._id)}>
                                                View
                                            </button>
                                    </Card>
                                    
                                </Col>
                        )
                        })}
                </Row>
            </Container>

            

        </div>
    )
}

export default Product;