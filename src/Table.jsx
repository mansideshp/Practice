import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
   async function name() {
    try{  
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
    }catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    name();
  },[]);


  return (
    <table style={{ border: '2px solid black', width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
