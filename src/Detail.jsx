import React from 'react';

function Detail(Props){
    return (
        <>
        <h1>{Props.name}</h1>
        <p>{Props.age}</p>
        <p>{Props.height}</p>
        </>

    )
}
export default Detail;