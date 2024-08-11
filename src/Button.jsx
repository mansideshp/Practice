import React from 'react';

function Button(Props){
    console.log(Props);
    return (<>
       {/* <button style={{backgroundColor:"red",width:"100px", height:"50px", margin:"50%"}} onClick={Props.mansi}>{Props.btnText}</button> */}
       <ul>
        <li>{Props.array1.age}</li>
        <li>{Props.array1.name}</li>
        
       </ul>
    </>)
}
export default Button;