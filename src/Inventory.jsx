import React, { useEffect, useState } from 'react';
import { Config } from './Config';
import axios from 'axios';

function Inventory() {
    const [asset, setAsset] = useState({
        asset: "",
        description: "",
        assetid: "",
        assetimage: ""

    })
    function UpdateAssets(event) {
        var name = event.target.name;
        var value = event.target.value;
        setAsset({ ...asset, [name]: value })


    }
    async function Submit(event) {
        event.preventDefault();
       

        try {
             await axios.post(Config.URL + "/addAsset", asset);

        }
        catch (error) {
            console.log("Error");
        }


    }
    const [allAssets, setAllAssets] = useState([])

  
    useEffect(() => {
        const result = async () => {
            var response = await axios.get(Config.URL + "/addAsset")
            setAllAssets(response.data);

        }
        result();
    }, [])
    async function deleteAsset(id){
     
        await axios.delete(`${Config.URL}/addAsset/${id}`)
        displaydata();
    }
     var count = 0;
     var values = [];
    function displaydata(){
        values = allAssets.map((e) => {
        
        count = 1;
        return (<><tr key={e._id}>
            <td style={{ border: "1px solid black" }}>{e.assetid}</td>
            <td style={{ border: "1px solid black" }}>{e.asset}</td>
            <td style={{ border: "1px solid black" }}>{e.description}</td>
            <td style={{ border: "1px solid black" }}><img src={e.assetimage} /></td>
            <td style={{ border: "1px solid black" }}><button>Edit</button></td>
            <td style={{ border: "1px solid black" }}><button onClick = {()=>{deleteAsset(e._id)}}>Delete</button></td>
        </tr></>)


    }
    )}
    displaydata();
    
    

    return (<><center>


        <h1>Add Asset Form</h1><br />
        <form>
            <input size="40" onChange={UpdateAssets} type="text" name="asset" placeholder="enter asset" /><br /><br /><br />
            <input size="40" onChange={UpdateAssets} type="text" name="description" placeholder="enter description" /><br /><br /><br />
            <input size="40" onChange={UpdateAssets} type="text" name="assetid" placeholder="enter id" /><br /><br /><br />
            <input size="40" onChange={UpdateAssets} type="text" name="assetimage" placeholder="enter image" /><br /><br /><br />
            <button onClick={Submit}>Add Asset</button>
            
        </form>
        
        {count===1 ? 
        <table style={{ border: "1px solid black", width: "100%" }}>

            <tbody>{values}</tbody>
        </table>:
            <div class="spinner-border text-success"></div>
        }
    </center></>); }

    
export default Inventory;