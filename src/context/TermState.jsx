import React, { useState } from "react";
import termContext from "./termContext";


const TermState=(props)=>{
    const [Term,SetTerm]=useState("");
    const [arr,setarr]=useState([]);


   
// fetching

const authorization=process.env.REACT_APP_API_KEY;
const query=Term;
var res=''

// const initialPhotoURL=`https://api.pexels.com/v1/curated?page=100&per_page=80`;
// const photoURL=`https://api.pexels.com/v1/search?query=${query}page=100&per_page=80`;
// const initialVideoURL=`https://api.pexels.com/videos/popular?page=100&per_page=80`;
// const videoURL= `https://api.pexels.com/videos/search?query=${query}`;
// const featuredURL =`https://api.pexels.com/v1/collections/featured?page=100&per_page=80`;

const URL=['initialPhotoURL','photoURL','initialVideoURL','videoURL','featuredURL'] 

async function getImg(query,url) {
    if(url==URL[0]){
        url=`https://api.pexels.com/v1/curated?page=2&per_page=80`;
    }
    if(url==URL[1]){
        url=`https://api.pexels.com/v1/search?query=${query}&page=2&per_page=80`;
    }
    if(url==URL[2]){
        url=`https://api.pexels.com/videos/popular?page=2&per_page=80`;
    }
    if(url==URL[3]){
        url=`https://api.pexels.com/videos/search?query=${query}`;
    }
    if(url==URL[4]){
        url=`https://api.pexels.com/v1/collections/featured?page=2&per_page=80`;
    }

    const baseUrl =url;
  console.log(baseUrl)
    const headers = new Headers();
    headers.append("Authorization", authorization);

    const data = await fetch(baseUrl,{
      method:"GET",
      headers: {
        Accept: "application/json",
        Authorization: authorization, 
    },
    })
    res=await data.json();
    console.log(res.photos,"res.photos")
    setarr(res.photos)
    console.log(arr)
}


// 

    return(
        <termContext.Provider value={{Term,SetTerm,arr,getImg,URL}}>
            {props.children}
        </termContext.Provider>
    )

}

export default TermState;