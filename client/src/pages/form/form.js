import React, { useEffect, useState } from 'react';

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

  const style = {
    margin: "10px",
  }

const date = new Date();

  const addProduct = (e) => {
    let payload = { make: productMake, model: productModel, price: productPrice, quantity: productQuantity, 
    capacity: productCapacity, product_code: productProducode, img: productImg, color_img1: productColorimg1, color_img2: productColorimg2, 
    color_img3: productColorimg3, color_img4: productColorimg4, description: productDescription, care_instructions: productCareinstructions, timestamp: date }
    axios.post('http://localhost:5000/api/cup', payload)
      .then()
      .catch()

  }

  return (

    <div style={{ border: "2px black solid", margin: 'auto', borderRadius: '5px', width: "50%" }} className="container">
      <form onSubmit={addProduct}>
        <div className="form">
          <h1 style={{ color: "black" }} >Products</h1>
          <div >
            <input style={style}
              type="text"
              placeholder="Make"
              onChange={(e => setProductMake(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Model"
              onChange={(e => setProductModel(e.target.value))}
            />
            <input style={style}
              type="number"
              placeholder="Price"
              onChange={(e => setProductPrice(e.target.value))}
            />
            <input style={style}
              type="number"
              placeholder="Quantity"
              onChange={(e => setProductQuantity(e.target.value))}
            />
            <input style={style}
                type="number"
                placeholder="Capacity"
                onChange={(e => setProductCapacity(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Product Code"
              onChange={(e => setProductProducode(e.target.value))}
            />
            <input style={style}
              type="url"
              placeholder="Image link"
              onChange={(e => setProductImg(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Color 1"
              onChange={(e => setProductColorimg1(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Color 2"
              onChange={(e => setProductColorimg2(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Color 3"
              onChange={(e => setProductColorimg3(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Color 4"
              onChange={(e => setProductColorimg4(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Description"
              onChange={(e => setProductDescription(e.target.value))}
            />
            <input style={style}
              type="text"
              placeholder="Care Instructions"
              onChange={(e => setProductCareinstructions(e.target.value))}
            />
            <button type='submit' style={style}>Add Product</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
