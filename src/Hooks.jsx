import React, {useState} from 'react';

function Hooks(){
    // const [count,setCount]=useState(100);
    
    // function IncNum(){
    //     setCount(count+1);
    // };
    // function DecNum(){
    //    setCount(count-1);
    // }
    var date= new Date();
    const [time, setTime] = useState(date.toLocaleTimeString());
    setInterval(()=>{
        var utime= new Date();
           setTime(utime.toLocaleTimeString());
        }, 1000);
       
        // setTime(time.toLocaleTimeString());
    
  

    return (<>
    <h1>{time}</h1>
        {/* <h1>{count}</h1>
        <button onClick={IncNum}>Click me to increase</button>
        <button onClick={DecNum}>Click me to decrease</button> */}
        {/* <button onClick={TimePlease}>Click me for present time</button> */}
    </>

    )}

 export default Hooks;
