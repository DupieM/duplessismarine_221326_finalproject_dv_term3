import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import PropductCard from "./product_card";
import Accordion from 'react-bootstrap/Accordion';

function Product() {

    const Products = [
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
        {
            id: 9,
            productname: 'Product 9',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 10,
            productname: 'Product 10',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 11,
            productname: 'Product 11',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 12,
            productname: 'Product 12',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 13,
            productname: 'Product 13',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 14,
            productname: 'Product 14',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 15,
            productname: 'Product 15',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 16,
            productname: 'Product 16',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 17,
            productname: 'Product 17',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 18,
            productname: 'Product 18',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 19,
            productname: 'Product 19',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 20,
            productname: 'Product 20',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 21,
            productname: 'Product 21',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 22,
            productname: 'Product 22',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 23,
            productname: 'Product 23',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 24,
            productname: 'Product 24',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 25,
            productname: 'Product 25',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 26,
            productname: 'Product 26',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 27,
            productname: 'Product 27',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        },
        {
            id: 28,
            productname: 'Product 28',
            productimg: 'https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg',
            productprice: 'R*****',
        }
    ]

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
                            <li>Brand 1</li>
                            <li>Brand 2</li>
                            <li>Brand 3</li>
                            <li>Brand 4</li>
                            <li>Brand 5</li>
                            <li>Add more</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={{width: '200px', marginBottom: '20px', marginLeft: '20px'}}>
                    <Accordion.Header>Filter by Prize</Accordion.Header>
                    <Accordion.Body>
                        <ul style={{listStyleType: 'none'}}>
                            <li>Prize Range 1</li>
                            <li>Prize Range 2</li>
                            <li>Prize Range 3</li>
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
                            <li>Color 1</li>
                            <li>Color 2</li>
                            <li>Color 3</li>
                            <li>Color 4</li>
                            <li>Color 5</li>
                            <li>Add more</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Container style={{marginLeft: '216px', marginTop: '-270px'}}>
                <Row>
                    {Products.map((product) => (
                        <Col key={product.id}>
                            <PropductCard
                            productimg={product.productimg}
                            productname={product.productname}
                            productprice={product.productprice}/>
                        </Col>
                    ))}
                </Row>
            </Container>

            

        </div>
    )
}

export default Product;