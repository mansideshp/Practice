import React, { useState } from 'react';
import Homepage from './Homepage';
import Login from './Login';

function ConditionalRendering() {
    const [uname, setname] = useState("");
    const [upass, setpass] = useState("");
    const [msg, setmsg] = useState("");
    var employeeDetails = [{ Name: "Shreshta", Age: 24, Height: "5'1" }, { Name: "Vinisha", Age: 23, Height: "5'1" }, { Name: "Pragna", Age: 22, Height: "5'1" }]

    function onnamechange(event) {
        setname(event.target.value);
    }
    function onpasswordchange(event) {
        setpass(event.target.value);
    }
    const submit = () => {
        setmsg(`Your form is submitted, your username is ${uname} and password is ${upass}`);


    }



    return (<>
        <center>
            <input type="text" placeholder='Enter Username' value={uname} onChange={onnamechange} /><br /><br />
            <input type="password" placeholder='Enter Password' value={upass} onChange={onpasswordchange} /><br /><br />
            <button onClick={submit}>Submit</button>
            <Homepage message={msg} emp={employeeDetails} />

        </center>
    </>)
}
export default ConditionalRendering;

