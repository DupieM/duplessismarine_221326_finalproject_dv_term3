import React, { useState } from "react";
import axios from 'axios';
import icon4 from './logo3.png';
import loginimg from './Login_picture 1.png';
import { Button, Form } from "react-bootstrap";
import '../App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SingUp() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const navigate = useNavigate()

    const addClient = (e) => {
        e.preventDefault();
        let payload = {
            username: username,
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/api/client', payload)
            .then(res => {
                navigate('/');
            })
            .catch()
        console.log(payload)

    }

    /* Singup Form */
    return (
        <div className="App2">
            <img src={icon4} alt="logo" style={{ width: '280px', marginTop: '-520px', marginLeft: '240px' }} />
            <img src={loginimg} alt="travel mug" style={{ width: '560px', height: '780px', marginTop: '50px', marginLeft: ' 240px' }} />
            <div style={{ marginTop: '10px', marginLeft: '390px', textAlign: 'left', marginTop: '-520px' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '40pt', textDecoration: 'underline', textAlign: 'left', marginBottom: '20px', color: '#0F2F48' }}>Sign Up</h1>
                <form style={{ width: '280px' }} onSubmit={addClient}>
                    <label style={{ fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48' }}>Email:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e => setEmail(e.target.value)}
						//value={data.username}
							
                        style={{ width: '250px', border: '2px solid #215273', fontSize: '12pt' }}
                    />
                    <label style={{ fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48' }}>Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
						//value={data.username}
							
                        style={{ width: '250px', border: '2px solid #215273', fontSize: '12pt' }}
                    />
                    
                    <label style={{ fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48' }}>Password:</label>
                    <input
                        type="password" /* Change the input type to password */
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
						//value={data.password}
							
                        style={{ width: '250px', border: '2px solid #215273', fontSize: '12pt' }}
                    />

                    <h4 style={{marginLeft: '102px', marginTop: '14px'}}>OR</h4>

                    <Link to={`/login`} style={{marginLeft: '92px', textDecoration: 'none', color: '#09333E', fontWeight: 'bold', fontSize: '15pt'}}>
                        Log In
                    </Link>

                    <br/>
                    <br/>

                    <button style={{marginLeft: '40px', border: 'none', fontSize: '20pt', marginTop: '12px', fontWeight: 'bold', marginBottom: '197px', borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '160px' }} type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SingUp;