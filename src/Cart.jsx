import React from 'react';


function Cart(Props){
    console.log(Props);
    return(
        <>
        <div id="deets">
            <img src ={Props.img}/>
            <div>
                <h1>{Props.title}</h1>
                <p>{Props.rating}</p>
                {/*<ul>
                    <li>10% Upto ₹2500 off on Samsung Axis Bank Signature credit card</li>
                    <li>10% Upto ₹5000 on Samsung Axis Bank Infinite Credit Card</li>
                    <li>Extra ₹500 off on Bank of Baroda Credit EMI 9m and above Txns, on products priced ₹39,990 and above</li>
                    <li>Get extra ₹7500 off (price inclusive of cashback/coupon)</li>
                </ul>*/}
            </div>
            </div>
        </>
    )
}
export default Cart;