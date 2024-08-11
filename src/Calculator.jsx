import React from 'react';

function Add(){
    var sum ;
    sum = 3+2
    return(<h1>{sum}</h1>)

}

function Sub(){
    var minus;
    minus = 10-6;
    return(<h1>{minus}</h1>)
}
 
export default Add;
export {Sub};