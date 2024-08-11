import React from 'react';

function Heading() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var sentence = '';
    const sentences = {
        color: "none",
    }
    
    
    
    if(hours<11){
    sentence = "Good Morning";
    sentences.color="green"
}
        else if(hours>11 && hours< 18){
            sentence = "Good Afternoon";
            sentences.color="pink"
        }
        else if(hours>=18 && hours<24){
           sentence = "Good Night!";
           sentences.color="red"
        }
        return (<><h1 style={{color:"white"}}>Hello Sir, <span style = {sentences}>{sentence}</span></h1></>)

}
export default Heading;