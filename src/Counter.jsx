import React, { useState } from 'react'
function Counter() {

    const [num, setCount] = useState(0);
    const [colorchange, setColor] = useState("red");

    function Increment() {
        setCount(num + 1);

    }
    function decrement() {
        if (num > 0) {
            setCount(num - 1);
        }
        else {
            setCount(0);
        }
    }
    function colrChange() {
        setColor("green");
    }



    return (<>
        <p>{num}</p>

        <button onClick={Increment}>Increment by {num}</button>
        <button onClick={decrement}>Decrement by 1</button>
        <p style={{ width: "100px", height: "100px", backgroundColor:  colorchange  }}>Mansi</p>
        <button onClick={colrChange}>Click me!</button>
    </>)
}
export default Counter;


