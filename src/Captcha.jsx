import React, { useState, useEffect } from 'react';

function Captcha() {
    const [captcha, setCaptcha] = useState("");
    const [rangebar , setRange] = useState(6);
    
    function randomNumber() {
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        var capt = "";
        for (var i = 1; i <= rangebar; i++) {
            var char = Math.floor(Math.random() * str.length + 1);
            capt = capt + str.charAt(char);
        }
        setCaptcha(capt);
    }
     useEffect(() => {
         randomNumber();
         console.log("USeeffect is runnning")
     }, [rangebar])
    return (<>
        <center>
            <h1>Captcha</h1>
            <input type="text" value={captcha} /><br /><br />
            <button onClick={() => {
                randomNumber();
            }}>Refresh</button><br/><br/>
            <input type="range" min="0" max="15" onChange={(event)=>{
                setRange(event.target.value);
            }} value={rangebar}/>
        </center>
    </>);
}
export default Captcha;