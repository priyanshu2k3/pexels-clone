import React, { useContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./Display.css"
import termContext from "../context/termContext";


function Display(){

    const a=useContext(termContext);
    const [arr,setarr]=useState([]);

      
    //useEffect(() =>{a.getImg()},[])
    
    return(<>
      { a.arr!=0 && a.arr.map((item) => {
        //  {console.log(item.id,"items")} 
            return(<a  key={item.id} ><img className="images" src={item.src.medium}/></a>)
            
     })} 
    </>);
}
export default Display;