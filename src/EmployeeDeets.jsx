import React from 'react';

function EmployeeDeets(Props){
    var arr = Props.emp.map((e)=>{
        return(<><h1>{e.Name}</h1><ul><li>{e.Age}</li><li>{e.Height}</li><li>{e.Weight}</li></ul></>)
    })
    return(<>{arr}</>)
}
export default EmployeeDeets;