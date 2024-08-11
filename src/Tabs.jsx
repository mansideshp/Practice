import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Tabs(){
    const[data, setData] = useState([]);
    const[query,setQuery] = useState('');
    useEffect(()=>{
        async function Value(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(response.data);
        }
        Value();
    },[])

    function SearchItem(event){
           setQuery(event.target.value)
}
const filteredData = data.filter((e)=>e.name.toLowerCase().includes(query.toLowerCase()));


 return(<>
    <input type='text' placeholder='search your item' value={query} onChange={SearchItem} />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Id</th>
            </tr>
        </thead>
        <tbody>
        {filteredData.map((e)=>{
            return(
                <>
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.username}</td>
                    </tr>
                </>

            )

        })}

        </tbody>
    </table>
 </>)   
}
export default Tabs;