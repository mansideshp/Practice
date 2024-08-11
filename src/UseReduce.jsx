import React, { useReducer } from 'react'

const[state , dispatch] = useReducer(reducer , intialState);

const reducer= (state,action)=>{
    if(action.type=="Increment"){
        return state+1
    }

<button onClick ={()=>{dispatch({type : "Increment"})}}
}


