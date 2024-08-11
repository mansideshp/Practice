import React , {useState, useEffect} from 'react'
import axios from 'axios'

const Interviewqs = () => {
    const[users,setUsers] = useState(null);
    useEffect(()=>{
        async function data(){
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            return await setUsers(response.data);

        }
        data();
        })
        //axios.get("https://api.escuelajs.co/api/v1/products").then(res=>setUsers(res.data)).catch((err)=>(console.log("error found")));
    

  return (
   
    users && users.map((user)=><div>{user.title}</div>)
   
  );
}

export default Interviewqs