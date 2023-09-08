import React, { useState } from "react";
import axios from 'axios';
import icon4 from './logo3.png';
import loginimg from './Login_picture 1.png';
import { Button, Form } from "react-bootstrap";
import '../App.css';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

function LogIn() {

    //const [data, setData] = useState({ username: "", password: "" });
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");
    

    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const payload = {
                username: username,
                password: password
            }
            console.log(payload)
            const url = "http://localhost:5000/api/auth";
            const response = await axios.post(url, payload);
    
            // Assuming the response contains the token
            const token = response.data;
    
            localStorage.setItem("token", token);
            window.location = "/";
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            } else {
                // Handle other types of errors here
                console.error("An error occurred:", error);
            }
        }
    };
    



    /* Login Form */
    return (
        <div className="App2">
            <img src={icon4} alt="logo" style={{ width: '280px', marginTop: '-520px', marginLeft: '240px' }} />
            <img src={loginimg} alt="travel mug" style={{ width: '560px', height: '780px', marginTop: '50px', marginLeft: ' 240px' }} />
            <div style={{ marginTop: '10px', marginLeft: '390px', textAlign: 'left', marginTop: '-520px' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '40pt', textDecoration: 'underline', textAlign: 'left', marginBottom: '20px', color: '#0F2F48' }}>Log In</h1>
                <form style={{ width: '280px' }} onSubmit={handleSubmit}>
                    <label style={{ fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48' }}>Username:
                        <input
                            type="text"
                            className="form-control m-2"
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
							//value={data.username}
							required
                            style={{ width: '250px', border: '2px solid #215273', fontSize: '12pt' }}
                        />
                    </label>
                    <label style={{ fontWeight: 'bold', fontSize: '20pt', color: '#0F2F48' }}>Password:
                        <input
                            type="password" /* Change the input type to password */
                            className="form-control m-2"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
							//value={data.password}
							required
                            style={{ width: '250px', border: '2px solid #215273', fontSize: '12pt' }}
                        />
                    </label>
                    <h6 style={{ width: '340px' }}>Forgot Password?</h6>

                    <h4 style={{marginLeft: '102px', marginTop: '14px'}}>OR</h4>

                    <Link to={`/sing_up`} style={{marginLeft: '87px', textDecoration: 'none', color: '#09333E', fontWeight: 'bold', fontSize: '15pt'}}>
                        Sign Up
                    </Link>

                    <br/>
                    <br/>

                    <button 
                        style={{marginLeft: '45px', border: 'none', fontSize: '20pt', marginTop: '12px', fontWeight: 'bold', marginBottom: '197px', borderRadius: '30px', backgroundColor: '#055E6C', color: '#CABCB1', padding: '8px', width: '160px' }} 
                        type="submit"

                    >
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;

