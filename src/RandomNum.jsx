import React, { useState, useEffect, useCallback } from 'react';

function RandomNum(){
    const[initialLength , setLength] = useState(6);
    const[intialNum , setNum] = useState(false);
    const[intialChar,setChar] = useState(false);
    const[password,setPass] = useState(6);
    const passwordGenerator = useCallback(()=>{
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var numberss = 1234567890;
        var specialchars = "!@#$%^&*()";
        var passresult = "";
        if(intialNum){
            str = str + numberss;
        }
        if(intialChar){
            str = str+ specialchars;
        }
        
        for(var i=1;i<=initialLength;i++){
            passresult+= str.charAt(Math.floor(Math.random()*str.length+1));
            
            

            
        }
        setPass(passresult);
    },[initialLength ,intialNum,intialChar , setPass])

    useEffect(()=>{passwordGenerator()},[initialLength ,intialNum,intialChar , setPass])

    return(<>
    <center>
    <input type="text" value={password}/><button on>Copy</button><br/>
        <input min= "0" max = "10" type ="range"  value= {initialLength} onChange = {(event)=>{
            setLength(event.target.value);
        }}/>
            <label>Length is {initialLength}</label>
        <br/>
        <input type= "checkbox" value = {intialNum} onChange ={()=>{
            setNum(prev=>!prev);
        }}/>
        <label>Number</label><br/>
        <input type = "checkbox" value = {intialChar} onChange = {()=>{
            setChar(prev=>!prev);
        }}/>
        <label>Character</label>

        </center>

    </>)
}
export default RandomNum;