import React, { useEffect, useState } from 'react';
import icon3 from './logo1.png';
import icon4 from './email.png';
import icon5 from './phone-call.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Form() {

  const [productMake, setProductMake] = useState();
  const [productModel, setProductModel] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productQuantity, setProductQuantity] = useState();
  const [productCapacity, setProductCapacity] = useState();
  const [productProducode, setProductProducode] = useState();
  const [productImg, setProductImg] = useState();
  const [productColorimg1, setProductColorimg1] = useState();
  const [productColorimg2, setProductColorimg2] = useState();
  const [productColorimg3, setProductColorimg3] = useState();
  const [productColorimg4, setProductColorimg4] = useState();
  const [productDescription, setProductDescription] = useState();
  const [productCareinstructions, setProductCareinstructions] = useState();
  const [productSize, setProductSize] = useState();

  const style = {
    margin: "10px",
  }

  const date = new Date();

  const addProduct = (e) => {
    let payload = { make: productMake, model: productModel, price: productPrice, quantity: productQuantity, 
    capacity: productCapacity, product_code: productProducode, img: productImg, color_img1: productColorimg1, color_img2: productColorimg2, 
    color_img3: productColorimg3, color_img4: productColorimg4, description: productDescription, care_instructions: productCareinstructions, timestamp: date, size: productSize }
    axios.post('http://localhost:5000/api/cup', payload)
      .then()
      .catch()

  }

  return (

    <div className="App2">

      <br/>

      <div style={{border: '3px solid #09333E', margin: 'auto', borderRadius: '5px', width: '450px', marginTop: '75px', marginBottom: '76px'}} className="container">
        <form onSubmit={addProduct}>
          <div className="form">
            <h1 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '40pt'}}>Add Product</h1>
            <div >
              <input
                type="text"
                placeholder="Make"
                onChange={(e => setProductMake(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Model"
                onChange={(e => setProductModel(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                type="number"
                placeholder="Price"
                onChange={(e => setProductPrice(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="number"
                placeholder="Quantity"
                onChange={(e => setProductQuantity(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                  type="number"
                  placeholder="Capacity"
                  onChange={(e => setProductCapacity(e.target.value))}
                  style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Product Code"
                onChange={(e => setProductProducode(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                type="url"
                placeholder="Image link"
                onChange={(e => setProductImg(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Color 1"
                onChange={(e => setProductColorimg1(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                type="text"
                placeholder="Color 2"
                onChange={(e => setProductColorimg2(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Color 3"
                onChange={(e => setProductColorimg3(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                type="text"
                placeholder="Color 4"
                onChange={(e => setProductColorimg4(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Size"
                onChange={(e => setProductSize(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <input
                type="text"
                placeholder="Description"
                onChange={(e => setProductDescription(e.target.value))}
                style={{marginRight: '14px', fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              />
              <input
                type="text"
                placeholder="Care Instructions"
                onChange={(e => setProductCareinstructions(e.target.value))}
                style={{fontSize: '17pt', padding: '5px', borderRadius: '5px', border: 'none', color: '#09333E', backgroundColor: '#BDD4E2', marginBottom: '9px', width: '150px'}}
              /><br/>
              <button type='submit' style={style}>Add Product</button>
            </div>
          </div>
        </form>
      </div>

      <br/>

      <footer>
        <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px'}}>
            <img src={icon3} style={{width: '6%',marginRight: "0px", marginBottom: '9px', marginTop: '20px', marginLeft: '-1200px'}}/>
        </div>
        <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'center', marginTop: '-90px'}}>
            <p>
                <img src={icon4} style={{width: '2%', marginRight: '10px'}}/>
                otg.cups@gmail.com
            </p>
            <p>
                <img src={icon5} style={{width: '2%', marginRight: '10px'}}/>
                + 01 234 567 88
            </p>
        </div>
        <div class="" style={{backgroundColor: '#869CAA', color: '#0C4654', padding: '5px', textAlign: 'right', marginTop: '-70px', marginRight: '80px'}}>
            <h6 class="text-uppercase fw-bold mb-4">© 2023 Copyright: On The Go</h6>
        </div>
      </footer>
      
    </div>

  );
}

export default Form;
