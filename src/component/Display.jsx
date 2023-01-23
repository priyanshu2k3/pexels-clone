import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import "./Display.css"

function Display(){
    const [arr,setarr]=useState([]);
    //const [data,setdata]=useState("");
    const authorization=process.env.REACT_APP_API_KEY;
    const query="horse";
    var res="";
    
    

    async function getImg() {
        const baseUrl = `https://api.pexels.com/v1/search?query=${query}`;
        const url = baseUrl + query;
      
        const headers = new Headers();
        headers.append("Authorization", authorization);

        const data = await fetch(baseUrl,{
          method:"GET",
          headers: {
            Accept: "application/json",
            Authorization: authorization,     //use the apikey you have generated
        },
        })
        res=await data.json()
        console.log(arr)

        console.log(data,"data");
        console.log(res.photos,"res.photos")
        //setdata(res.photos);
        setarr(res.photos)

    }
      
    useEffect(() =>getImg,[0])
    
    return(<>
      { arr!=0 && arr.map((item) => {
         {console.log(item.id,"items")} 
            return(<a ><img key={item.id} className="images" src={item.src.medium}/></a>)
            
     })} 
    </>);
}
export default Display;