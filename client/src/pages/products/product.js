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
    const [product, setProduct] = useState([]);
    

    // get al the cups form databasis
    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
          .then((res) => {
            setProducts(res.data)
          })
          .catch()
    });

    // Navigate to single product page
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

            {/* The Filtering of the product set does not output on a static page as the selection is 
            replace by full product page I believe this can be fixed by the show and hide function*/}
            <Accordion style={{}}>
                <Accordion.Item eventKey="0" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Brand</Accordion.Header>
                    <Accordion.Body>
                        <select onChange={ (e) => {
                            axios.get('http://localhost:5000/api/cups/')
                            .then((res) => {
                  
                              let arrayOfmakes = [];
                  
                              for(let i=0; i < res.data.length;i++) {
                                  if (res.data[i].make == e.target.value) {
                                      arrayOfmakes.push(res.data[i])
                                  }
                              }
                  
                              console.log(arrayOfmakes);

                              setProducts(arrayOfmakes);
                            })
                            .catch()  
                        }}>
                            <option value=""  style={{cursor: 'pointer'}}>Choose make</option>
                            <option value="Bodum" style={{cursor: 'pointer'}}>Bodum</option>
                            <option value="Built" style={{cursor: 'pointer'}}>Built</option>
                            <option value="Carrol Boyes" style={{cursor: 'pointer'}}>Carrol boyes</option>
                            <option value="DeLonghi" style={{cursor: 'pointer'}}>DeLonghi</option>
                            <option value="Ecoffee Cup" style={{cursor: 'pointer'}}>Ecoffee Cup</option>
                            <option value="Eva Solo" style={{cursor: 'pointer'}}>Eva Solo</option>
                            <option value="Joseph Joseph" style={{cursor: 'pointer'}}>Joseph Joseph</option>
                            <option value="KeepCup" style={{cursor: 'pointer'}}>KeepCup</option>
                            <option value="Kulgo" style={{cursor: 'pointer'}}>Kulgo</option>
                            <option value="Le Creuset" style={{cursor: 'pointer'}}>Le Creuset</option>
                            <option value="Mepal" style={{cursor: 'pointer'}}>Mepal</option>
                            <option value="MiiR" style={{cursor: 'pointer'}}>MiiR</option>
                            <option value="Sengetti" style={{cursor: 'pointer'}}>Sengetti</option>
                            <option value="W & P" style={{cursor: 'pointer'}}>W & P</option>
                            <option value="Zoku" style={{cursor: 'pointer'}}>Zoku</option>
                        </select>
                    </Accordion.Body>  
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Price</Accordion.Header>
                    <Accordion.Body>
                        <select onChange={ (e) => {
                            axios.get('http://localhost:5000/api/cups/')
                            .then((res) => {
                  
                              let arrayOfprices = [];
                  
                              for(let i=0; i < res.data.length;i++) {
                                  if (res.data[i].price == e.target.value) {
                                      arrayOfprices.push(res.data[i])
                                  }
                              }
                  
                              console.log(arrayOfprices);

                              setProducts(arrayOfprices);
                            })
                            .catch()  
                        }}>
                            <option value="" style={{cursor: 'pointer'}}>Choose price</option>
                            <option value="200" style={{cursor: 'pointer'}}>R200</option>
                            <option value="300" style={{cursor: 'pointer'}}>R300</option>
                            <option value="400" style={{cursor: 'pointer'}}>R400</option>
                            <option value="500" style={{cursor: 'pointer'}}>R500</option>
                            <option value="600" style={{cursor: 'pointer'}}>R600</option>
                        </select>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Size</Accordion.Header>
                    <Accordion.Body>
                        <select onChange={ (e) => {
                            axios.get('http://localhost:5000/api/cups/')
                            .then((res) => {
                  
                              let arrayOfsizes = [];
                  
                              for(let i=0; i < res.data.length;i++) {
                                  if (res.data[i].size == e.target.value) {
                                    arrayOfsizes.push(res.data[i])
                                  }
                              }
                  
                              console.log(arrayOfsizes);

                              setProducts(arrayOfsizes);
                            })
                            .catch()  
                        }}>
                            <option value="" style={{cursor: 'pointer'}}>Choose Size</option>
                            <option value="small" style={{cursor: 'pointer'}}>Small</option>
                            <option value="medium" style={{cursor: 'pointer'}}>Medium</option>
                            <option value="large" style={{cursor: 'pointer'}}>Large</option> 
                        </select>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" style={{width: '200px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Color</Accordion.Header>
                    <Accordion.Body>
                        <select onChange={ (e) => {
                            axios.get('http://localhost:5000/api/cups/')
                            .then((res) => {
                  
                              let arrayOfsizes = [];
                  
                              for(let i=0; i < res.data.length;i++) {
                                  if (res.data[i].color_img1 == e.target.value) {
                                    arrayOfsizes.push(res.data[i])
                                  }
                              }
                  
                              console.log(arrayOfsizes);

                              setProducts(arrayOfsizes);
                            })
                            .catch()  
                        }}>
                            <option value="" style={{cursor: 'pointer'}}>Choose</option>
                            <option value="Mint" style={{cursor: 'pointer'}}>Mint</option>
                            <option value="Green" style={{cursor: 'pointer'}}>Green</option>
                            <option value="Blue" style={{cursor: 'pointer'}}>Blue</option>
                            <option value="Pink" style={{cursor: 'pointer'}}>Pink</option>
                            <option value="White" style={{cursor: 'pointer'}}>White</option>
                            <option value="Grey" style={{cursor: 'pointer'}}>Grey</option>
                            <option value="Black" style={{cursor: 'pointer'}}>Black</option>
                        </select>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Container style={{marginLeft: '216px', marginTop: '-270px', marginBottom: '48px'}}>
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
                <div style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
                    <img src={icon3} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
                </div>
                <div style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
                    <p>
                        <img src={icon4} style={{width: '2%', marginRight: '10px'}}/>
                        otg.cups@gmail.com
                    </p>
                    <p>
                        <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
                        + 01 234 567 88
                    </p>
                </div>
                <div style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
                    <h6 className="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
                </div>
            </footer>

        </div>
    )
}

export default Product;