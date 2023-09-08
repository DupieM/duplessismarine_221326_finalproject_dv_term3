import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import icon from './shopping-cart.png';
import icon2 from './log-out.png';
import icon3 from './logo1.png';
// import logo from './logo.svg';

function BasicNavbar() {
    return (
        <Navbar variant="dark" style={{backgroundColor: '#055E6C', padding: '0'}}>
            <Container style={{textAlign: 'left'}}>
                <Navbar.Brand href="/"><img src={icon3} style={{width: '17%',marginRight: "-50px"}}/></Navbar.Brand>
                <Nav style={{marginRight: "346px"}}>
                    <Nav.Link href="/product" style={{fontSize: '17pt', color: '#CABCB1', fontWeight: 'bold', marginRight: '20px'}}>Products</Nav.Link>
                    <Nav.Link href="/inventory" style={{fontSize: '17pt', color: '#CABCB1', fontWeight: 'bold', marginRight: '20px'}}>Inventory</Nav.Link>
                    <Nav.Link href="/order" style={{fontSize: '17pt', color: '#CABCB1', fontWeight: 'bold'}}>Orders</Nav.Link>
                </Nav>
                <Navbar.Brand href="/cart" style={{marginRight: "50px"}}><img src={icon} style={{width: '120%'}}/></Navbar.Brand>
                <Navbar.Brand href="/login"><img src={icon2} style={{width: '120%'}}/></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default BasicNavbar;