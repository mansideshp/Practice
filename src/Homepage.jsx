import React from 'react'

function Homepage(Props){
    var arr = Props.emp.map((e)=>{
        return <><p>{e.Name}</p><p>{e.Age}</p><p>{e.Height}</p></>
    })
    return(<>
        <h1>{Props.message}</h1>
        <ul>{arr}</ul>
    </>)
}
export default Homepage;
