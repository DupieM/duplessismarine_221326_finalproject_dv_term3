import React from "react";
import { Card } from "react-bootstrap"

const PropductCard = ({productimg, productname, productprice}) => {
    return (
        <Card style={{width: '270px', height: '380px', marginLeft: '28px', marginBottom: '30px', backgroundColor: '#869CAA', textAlign: 'center', padding: '9px'}}>
            <img src="https://i.pinimg.com/474x/e9/d4/df/e9d4dfad17d0851baee2538da9171974.jpg"  alt="cup" style={{width: '250px'}}/>
            <Card.Body>
                <Card.Title style={{fontSize: '20pt', marginTop: '1px', color: '#0C4654'}}>{productname}</Card.Title>
                <Card.Text style={{fontSize: '20pt', marginTop: '10px', color: '#0C4654'}}>{productprice}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PropductCard;