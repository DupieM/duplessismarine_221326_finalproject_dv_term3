import React from "react";
// import {useState, useEffect} from "react";
// import { Card, CarouselItem } from "react-bootstrap"
// import { Carousel } from "react-bootstrap"
import loginimg from './Login_picture 1.png';
import { Button, Form } from "react-bootstrap";
import icon4 from './logo3.png';

function LogIn() {
    return (
        <div className="App2">

            <img src={icon4}  alt="logo" style={{width: '280px', marginTop: '-520px', marginLeft: '240px'}}/>

            <img src={loginimg}  alt="travel mug" style={{width: '560px', height: '780px', marginTop: '50px', marginLeft: ' 240px'}}/>

            <div style={{marginTop: '10px', marginLeft: '390px',textAlign: 'left', marginTop: '-520px'}}>
                <h1 style={{fontWeight: 'bold', fontSize: '40pt', textDecoration: 'underline',textAlign: 'left', marginBottom: '20px', color: '#0F2F48'}}>Log In</h1>
                <Form style={{width: '280px'}}>
                    <label for="name" style={{fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48'}}>Username:
                        <input type="text" class="form-control m-2" id="name" name="signin_username" style={{width: '250px',border: '2px solid #215273',fontSize: '12pt'}}/>
                    </label>
                    
                    <label for="name" style={{fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48'}}>Password:
                    <input type="text" class="form-control m-2" id="name" name="signin_password" style={{width: '250px',border: '2px solid #215273',fontSize: '12pt'}}/>
                    </label>
                   
                    <h6 style={{width: '340px'}}>Forgot Password?</h6>
                    <a href="/"><Button style={{border: 'none', fontSize: '20pt', marginTop: '12px', fontWeight: 'bold', marginBottom: '197px', 
                    borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '160px'}}>
                        Proceed
                    </Button></a>
                </Form>
            </div>

        </div>

    )
}

export default LogIn;