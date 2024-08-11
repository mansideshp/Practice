import React, { useState } from 'react';

function Form(){
    const[uname , setName] = useState("");
    const[upassword, setPass] = useState("");
    const[message, setmsg] = useState("");
    function username(event){
             setName(event.target.value);
    }
    function password(event){
        setPass(event.target.value);
    }
    function btn(){
        setmsg(`Your form is submitted`);
    }

    return(<>
    <input type="text" placeholder='Enter username' value={uname} onChange={username}/><br/>
    <input type="password" placeholder='Enter password' value={upassword} onChange = {password}/><br/>
    <button onClick={btn}>Submit</button>
    <h1>{message}</h1>

    </>)
}
export default Form;