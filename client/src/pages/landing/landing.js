import React from "react";
import icon from './price_tag.png';
import icon2 from './brand.png';
import icon3 from './color-palette.png';
import icon4 from './measuring-tape.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Card, CarouselItem } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import PropductCard from "../products/product_card";

function Landing() {

    const NewestProduct = [
        {
            id: 1,
            productname: 'Product 1',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 2,
            productname: 'Product 2',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 3,
            productname: 'Product 3',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 4,
            productname: 'Product 4',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
    ]

    const DiscountedProduct = [
        {
            id: 1,
            productname: 'Product 1',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 2,
            productname: 'Product 2',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 3,
            productname: 'Product 3',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 4,
            productname: 'Product 4',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 5,
            productname: 'Product 5',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 6,
            productname: 'Product 6',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 7,
            productname: 'Product 7',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 8,
            productname: 'Product 8',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
    ]


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
                    {NewestProduct.map((product) => (
                        <Col key={product.id} >
                            <PropductCard
                            productimg={product.productimg}
                            productname={product.productname}
                            productprice={product.productprice}/>
                        </Col>
                    ))}
                </Row>
            </Container>

            <br/>

            <h2 style={{marginLeft: '70px', fontWeight: 'bold', color: '#5C3D4C'}}>Discounted Products</h2>

            <br/>

            <Container>
                <Row>
                    {DiscountedProduct.map((product) => (
                        <Col key={product.id}>
                            <PropductCard
                            productimg={product.productimg}
                            productname={product.productname}
                            productprice={product.productprice}/>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* <Card style={{width: '20%', height: '420px', marginLeft: '28px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px'}}>
                <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="Product picture"/>
                <Card.Body>
                    <Card.Title style={{fontSize: '20pt', marginTop: '1px', color: '#0C4654'}}>Name of product</Card.Title>
                    <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#0C4654'}}> Price</Card.Text>
                </Card.Body>
            </Card> */}

            <br/>
        </div>

    )
}

export default Landing;