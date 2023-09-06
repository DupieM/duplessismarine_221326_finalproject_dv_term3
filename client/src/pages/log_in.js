import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
// import { Card, CarouselItem } from "react-bootstrap"
// import { Carousel } from "react-bootstrap"
import loginimg from './Login_picture 1.png';
import { Button, Form } from "react-bootstrap";
import icon4 from './logo3.png';

function LogIn() {

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return (
        <div className="App2">

            <img src={icon4}  alt="logo" style={{width: '280px', marginTop: '-520px', marginLeft: '240px'}}/>

            <img src={loginimg}  alt="travel mug" style={{width: '560px', height: '780px', marginTop: '50px', marginLeft: ' 240px'}}/>

            <div style={{marginTop: '10px', marginLeft: '390px',textAlign: 'left', marginTop: '-520px'}}>
                <h1 style={{fontWeight: 'bold', fontSize: '40pt', textDecoration: 'underline',textAlign: 'left', marginBottom: '20px', color: '#0F2F48'}}>Log In</h1>
                <form style={{width: '280px'}} onSubmit={handleSubmit}>
                    <label  style={{fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48'}}>Username:
                        <input 
                            type="text" 
                            className="form-control m-2" 
                            name="username"
                            onChange={handleChange}
                            value={data.username}
                            required
                            style={{width: '250px',border: '2px solid #215273',fontSize: '12pt'}}
                        />
                    </label>
                    <label  style={{fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48'}}>Password:
                    <input 
                        type="text" 
                        className="form-control m-2" 
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        style={{width: '250px',border: '2px solid #215273',fontSize: '12pt'}}
                    />
                    </label>
                    <h6 style={{width: '340px'}}>Forgot Password?</h6>
                    <button style={{border: 'none', fontSize: '20pt', marginTop: '12px', fontWeight: 'bold', marginBottom: '197px', 
                    borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '160px'}} type="submit">
                        Proceed
                    </button>
                </form>
            </div>

        </div>

    )
}

export default LogIn;