import React, { useEffect, useState } from 'react';
import axios from 'axios'


function SingleProduct() {

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

    const [product, setProducts] = useState([]);

    const cid =  localStorage.getItem("cupID");

    // Get info from spesific song in the database
    useEffect(() => {
        let payload = { make: productMake, model: productModel, price: productPrice, quantity: productQuantity, 
        capacity: productCapacity, product_code: productProducode, img: productImg, color_img1: productColorimg1, color_img2: productColorimg2, 
        color_img3: productColorimg3, color_img4: productColorimg4, description: productDescription, care_instructions: productCareinstructions }
        axios.get('http://localhost:5000/api/cup/' + cid, payload)
        .then((res) => {
            setProducts(res.data)
            console.log(setProducts)
        })
        .catch()
    });

    const handleCart = (productid) => {
        sessionStorage.setItem("cupCID", productid)
    };

    return (
        <div className="App">

            <br/>

            <h2 style={{marginLeft: '150px', fontWeight: 'bold', color: '#5C3D4C', fontSize: '37pt'}}>{product.model}, {product.capacity}ml</h2>

            <img src={product.img}  alt="travel mug" style={{height: '430px'}}/>

            <br/>

            <div style={{border: '4.5px solid black', width: '500px'}}>
                <div>
                    <h3>Prize: R{product.price}</h3>
                    <h3>
                        Selected Color: <select>
                            <option>{product.color_img1}</option>
                            <option>{product.color_img2}</option>
                            <option>{product.color_img3}</option>
                            <option>{product.color_img4}</option>
                        </select>
                    </h3>
                    <h4>Order Number: {product.product_code}</h4>
                    <h3>Stock: {product.quantity}</h3>
                    <h3>Quantity: <input type="number" placeholder="0" style={{width: '50px'}}/></h3>
                    <button onClick={() => handleCart(product._id)}>
                        Add To Cart
                    </button>
                </div>
            </div>

            <br/>

            <div style={{border: '4.5px solid black', width: '1200px'}}>
                <h3>Product Info:</h3>
                <p>{product.description}</p>

                <h3>Care Instructions:</h3>
                <p>{product.care_instructions}</p>
            </div>



        </div>
    )
}

export default SingleProduct;