import React from 'react'
import { useState } from 'react';
import Childe from './Childe';

const Parent = () => {
    const[val , setVal] = useState("Type something here");
    const sendData = (e)=>{
        setVal(e.target.value);

    };

  return (
    <>
    <h1>{val}</h1>
    <Childe datas={sendData}/>
    </>
  )
}

export default Parent