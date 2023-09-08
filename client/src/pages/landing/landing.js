import icon from './price_tag.png';
import icon2 from './brand.png';
import icon3 from './color-palette.png';
import icon4 from './measuring-tape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Card, CarouselItem } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import icon5 from './logo1.png';
import icon6 from './email.png';
import icon7 from './phone-call.png';

function Landing() {

    const [timestamp, setTimeStamp] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
        .then((res) => {
            setTimeStamp(res.data.timestamp)
        })
        .catch()
    });


    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
          .then((res) => {
            let arrayOfnew = [];

            for(let i=0; i < res.data.length;i++) {
                if (res.data[i].timestamp == timestamp) {
                    arrayOfnew.push(res.data[i])
                }
            }

            console.log(arrayOfnew);
        
            setProducts(arrayOfnew)

          })
          .catch()
    });

    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/cups/')
          .then((res) => {

            let arrayOfdis = [];

            for(let i=0; i < res.data.length;i++) {
                if (res.data[i].discount == 10) {
                    arrayOfdis.push(res.data[i])
                }
            }

            console.log(arrayOfdis);
           
            setProduct(arrayOfdis)
          })
          .catch()
    });


    const handleSingleDiscount = (productid) => {
        localStorage.setItem("cupID", productid)
        window.location = "/single_product";
    };

    return (
        <div className="App">
            
             <Carousel style={{width: '1550px', height: '630px', marginTop: '30px', textAlign: 'center'}}>
                <CarouselItem>
                    <Card style={{width: '93%', marginLeft: '4.5%', backgroundColor: '#869CAA', height: '620px'}}>
                    <img src="https://i.pinimg.com/564x/60/b9/5e/60b95e9663f9fbb763abcdbfb630a76e.jpg"  alt="Travel mug picture" style={{height: '680px'}}/>
                        <Card.Body style={{paddingTop: '2px', paddingBottom: '0px'}}>
                            <Card.Title>Discription of mug</Card.Title>
                        </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{width: '93%', marginLeft: '4.5%', backgroundColor: '#869CAA', height: '620px'}}>
                        <img src="https://ecoffeecup.jp/cdn/shop/articles/index_epcmain.jpg?v=1681346665"  alt="Travel mug picture" style={{height: '880px'}}/>
                        <Card.Body style={{paddingTop: '2px', paddingBottom: '0px'}}>
                            <Card.Title>Discription of mug</Card.Title>
                        </Card.Body>
                    </Card>
                </CarouselItem> 
                <CarouselItem>
                    <Card style={{width: '93%', marginLeft: '4.5%', backgroundColor: '#869CAA', height: '620px'}}>
                        <img src="https://i.pinimg.com/564x/76/d3/f6/76d3f6aadcabcf9d27d3769daeb1de70.jpg"  alt="Travel mug picture" style={{height: '980px', marginTop: '-60px'}}/>
                        <Card.Body style={{paddingTop: '2px', paddingBottom: '0px'}}>
                            <Card.Title>Discription of mug</Card.Title>
                        </Card.Body>
                    </Card>
                </CarouselItem> 
                <CarouselItem>
                    <Card style={{width: '93%', marginLeft: '4.5%', backgroundColor: '#869CAA', height: '620px'}}>
                        <img src="https://www.formahouse.co.uk/public/uploads/product/pictures/ed7881_567046-503046-567088-575037-eva-solo-to-go-soft-beige.jpg"  alt="Travel mug picture" style={{height: '980px', marginTop: '-250px'}}/>
                        <Card.Body style={{paddingTop: '2px', paddingBottom: '0px'}}>
                            <Card.Title>Discription of mug</Card.Title>
                        </Card.Body>
                    </Card>
                </CarouselItem>
                <CarouselItem>
                    <Card style={{width: '93%', marginLeft: '4.5%', backgroundColor: '#869CAA', height: '620px'}}>
                        <img src="https://katiecouric.com/wp-content/uploads/2021/12/Hero-image-for-brand-detail-page-Shop-27.png"  alt="Travel mug picture" style={{height: '900px', marginTop: '-140px'}}/>
                        <Card.Body style={{paddingTop: '2px', paddingBottom: '0px'}}>
                            <Card.Title>Discription of mug</Card.Title>
                        </Card.Body>
                    </Card>
                </CarouselItem>    
            </Carousel>

            <br/>

            <h2 style={{marginLeft: '70px', fontWeight: 'bold', color: '#5C3D4C'}}>Browse by Category</h2>

            <br/>

            <Card style={{width: '10%', marginLeft: '15%', marginTop: '20px', backgroundColor: '#869CAA', textAlign: 'center', 
            padding: '8px', borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(38, 68, 76, 0.6), 0 6px 20px 0 rgba(38, 68, 76, 0.6)'}}>
                <img src={icon} style={{width: '64%', marginLeft: '25px'}} alt="Price icon/picture"/>
                <Card.Body style={{padding: '3%'}}>
                    <Card.Title style={{fontSize: '24pt', marginTop: '10px', color: '#0C4654'}}>Price</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{width: '10%', marginLeft: '35%', marginTop: '-172px', backgroundColor: '#869CAA', textAlign: 'center', 
            padding: '8px', borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(38, 68, 76, 0.6), 0 6px 20px 0 rgba(38, 68, 76, 0.6)'}}>
                <img src={icon2} style={{width: '64%', marginLeft: '25px'}} alt="Brand icon/picture"/>
                <Card.Body style={{padding: '3%'}}>
                    <Card.Title style={{fontSize: '24pt', marginTop: '10px', color: '#0C4654'}}>Brand</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{width: '10%', marginLeft: '55%', marginTop: '-172px', backgroundColor: '#869CAA', textAlign: 'center', 
            padding: '8px', borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(38, 68, 76, 0.6), 0 6px 20px 0 rgba(38, 68, 76, 0.6)'}}>
                <img src={icon3} style={{width: '64%', marginLeft: '25px'}} alt="Color icon/picture"/>
                <Card.Body style={{padding: '3%'}}>
                    <Card.Title style={{fontSize: '24pt', marginTop: '10px', color: '#0C4654'}}>Color</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{width: '10%', marginLeft: '75%', marginTop: '-172px', backgroundColor: '#869CAA', textAlign: 'center', 
            padding: '8px', borderRadius: '0px', boxShadow: '0 4px 8px 0 rgba(38, 68, 76, 0.6), 0 6px 20px 0 rgba(38, 68, 76, 0.6)'}}>
                <img src={icon4} style={{width: '64%', marginLeft: '25px'}} alt="Size icon/picture"/>
                <Card.Body style={{padding: '3%'}}>
                    <Card.Title style={{fontSize: '24pt', marginTop: '10px', color: '#0C4654'}}>Size</Card.Title>
                </Card.Body>
            </Card>

            <br/>

            <h2 style={{marginLeft: '70px', fontWeight: 'bold', color: '#5C3D4C'}}>Newest Products</h2>

            <br/>

            <Container>
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
                                    <button style={{marginBottom: '10px'}}>
                                        View
                                    </button>
                                </Card>  
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <br/>

            <h2 style={{marginLeft: '70px', fontWeight: 'bold', color: '#5C3D4C'}}>Discounted Products</h2>

            <br/>

            <Container>
                <Row>
                    {product.map(product => {
                        return (
                            <Col key={product._id}>
                                <Card style={{width: '270px', height: '430px', marginLeft: '28px', marginBottom: '30px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px'}}>
                                    <img src={product.img}  alt="cup" style={{width: '250px'}}/>
                                    <Card.Body style={{paddingLeft: "0px", paddingRight: "0px"}}>
                                        <Card.Title style={{fontSize: '17pt', marginTop: '1px', color: '#0C4654'}}>{product.model}</Card.Title>
                                        <Card.Text style={{fontSize: '17pt', marginTop: '10px', color: '#0C4654'}}>R {product.price}</Card.Text>
                                    </Card.Body>
                                    <button style={{marginBottom: '10px'}} onClick={() => handleSingleDiscount(product._id)}>
                                        View
                                    </button>
                                </Card>  
                            </Col>
                        )
                    })}
                </Row>
            </Container>

            <br/>

            <footer>
                <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
                    <img src={icon5} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
                </div>
                <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
                    <p>
                        <img src={icon6} style={{width: '2%', marginRight: '10px'}}/>
                        otg.cups@gmail.com
                    </p>
                    <p>
                        <img src={icon7} style={{width: '2%', marginRight: '10px'}}/>
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

export default Landing;