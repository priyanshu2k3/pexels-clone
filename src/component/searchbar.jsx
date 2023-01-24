import React ,{ useContext, useState }from "react";
import "./searchbar.css";
import { AppProvider } from "../context";
import termContext from "../context/termContext";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function Searchbar(){
    const a=useContext(termContext);
    async function  clicked(e){
        e.preventDefault();
        console.log(a.Term,"a.term");
    console.log(a)
         a.getImg(a.Term,a.URL[1]);
    }
        
    return(
        <form >
        <div className="searchbar" >
            
            <input className="input" type="text" placeholder="Search for free photos" onChange={(e)=>{a.SetTerm(e.target.value)}}/>
            <span className="material-symbols-outlined" onClick={clicked}>
                search
            </span>
             
            {/* <img  className="icon" src={require("../assets/searchicon.png") } /> */}
            <button type="submit" onClick={clicked} style={{display:"none"}}/>
           
        </div>
         </form>
    )
}
export default Searchbar;