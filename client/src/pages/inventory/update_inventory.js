import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import icon from './save(2).png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateInventory() {

//     const [productMake, setProductMake] = useState();
//     const [productModel, setProductModel] = useState();
//     const [productPrice, setProductPrice] = useState();
//     const [productQuantity, setProductQuantity] = useState();
//     const [productCapacity, setProductCapacity] = useState();
//     const [productImg, setProductImg] = useState();
//     const [productDiscount, setProductDiscount] = useState();

//     const [product, setProducts] = useState([]);

//     const uid =  localStorage.getItem("cupUID");

//     // Get info from spesific cup in the database
//     useEffect(() => {
//         axios.get('http://localhost:5000/api/cup/' + uid)
//         .then((res) => {
//             setProducts(res.data)
//             // console.log(setProducts)
//         })
//         .catch()
//     });

//     let editformvalues = {make: product.make, model: product.model, price: product.price, quantity: product.quantity,capacity: product.capacity, 
//     img: product.img, product_code: product.product_code, color_img1: product.color_img1, color_img2: product.color_img2, color_img3: product.color_img3, color_img4: product.color_img4, 
//     description: product.description, care_instructions: product.care_instructions, timestamp: product.timestamp, discount: product.discount, }

//     // console.log(editformvalues);

//     const [editValues, setEditValues] = useState(editformvalues);

//     const updateValues = (e) => {
//         const {name, value} = e.target;
//         setEditValues({editValues, [name]: value});
//         console.log(editValues);
//     }

//    const updateProd = (e) => {
//         // e.preventDefault();
//         let productid = product._id;
//         let payload = editValues;

//         axios.put('http://localhost:5000/api/updatecup/' + productid, payload)
//         .then((res)=>{
//             if(res){
//                 console.log("Item Updated");
//             }
//         })
//         .catch(function (error) {console.log(error)});

//         window.location = "/inventory";
//    }

    // const UpdateProduct = (productid) => {
    //     let payload = {price: productPrice, quantity: productQuantity}
    //     axios.put('http://localhost:5000/api/cup/' + productid, payload)
    //       .then()
    //       .catch()
    //   }

    const { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        img: '',
        make: '',
        model: '',
        price: '',
        quantity: '',
        discount: ''
    });
    useEffect(() => {
        axios.get('http://localhost:5000/api/cup/' + id)
        .then(res => {
            setValues({...values, make: res.data.make, price: res.data.price, img: res.data.img, model: res.data.model, quantity: res.data.quantity, disccount: res.data.disccount,})
            console.log(res.data);
        })
        .catch(res => console.log(res))
    }, []);

    const navigate = useNavigate()

    const prodid = sessionStorage.getItem("pid");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/updatecup/' + prodid, values)
        .then(res => {
            navigate('/inventory');
        })
        .catch(res => console.log(res))
    }


    return (
        <div className="App2">

            <br/>

            <h2 style={{fontWeight: 'bold', color: '#5C3D4C', fontSize: '30pt'}}>Update Inventory</h2>

            <div style={{marginTop: '40px', marginLeft: '40px', marginRight: '40px'}}>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <h1 style={{ color: "black" }} >Update Product</h1>
                        <div>
                            <img src={values.img}  alt="travel mug" style={{height: '120px'}}/>
                            <label>Product make</label>      
                            <input 
                                type="text"
                                placeholder="model"
                                value={values.make}
                                onChange={e => setValues({...values, make: e.target.value})}
                            />
                            <label>Product modal</label>      
                            <input 
                                type="text"
                                placeholder="model"
                                value={values.model}
                                onChange={e => setValues({...values, model: e.target.value})}
                            />
                            <label>Prize</label>
                            <input
                                type="number"
                                placeholder="price"
                                value={values.price}
                                onChange={e => setValues({...values, price: e.target.value})}
                            />
                            <label> Quantity</label>
                            <input 
                                type="number"
                                placeholder="quantity"
                                value={values.quantity}
                                onChange={e => setValues({...values, quantity: e.target.value})}
                            />
                            <label> Discount</label>
                            <input
                                type="number"
                                placeholder="discount"
                                value={values.discount}
                                onChange={e => setValues({...values, discount: e.target.value})}
                            />

                            <button type="submit" style={{backgroundColor: '#6298A4', border: 'none'}}>
                                <img src={icon}  alt="travel mug" style={{height: '38px', cursor: 'pointer'}}/>
                            </button>
                        </div>
                    </div>
                </form>

                
            </div>

            <br/>

        </div>
    )
}

export default UpdateInventory;



// onChange={updateValues}
// onSubmit={updateProd}