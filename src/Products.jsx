import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {
    const [Prods, setProds] = useState([]);
    const display = () => {
        var list = Prods.map((product) => {
            return (<>
                <div key={product.id}> <img style={{ width: "100px", height: "auto" }} src={product.image} /></div></>)

        })
        return list;

    }

    useEffect(() => {
      
        const APIcall = async () => {
            var response = await axios.get("https://fakestoreapi.com/products");
            setProds(response.data);
            


        }
        APIcall();
    },[])

    return (<>
        <h1>Products</h1>
        {Prods.length == 0 ? <div class="spinner-border text-dark"></div> : <div style={{ display: "flex", gap :"20px" }}>{display()}</div>}

    </>)
}
export default Products;