import React ,{ useReducer } from "react";


const initialState="";
function reducer(state,action){
    return state;
}

function UseReducer(){

    const [state,dispatch]=useReducer(reducer,initialState)
    
    return(<></>)
}
export {UseReducer}