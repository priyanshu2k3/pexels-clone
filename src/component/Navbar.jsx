import React ,{ useState }from "react";
import "./Navbar.css"
import Searchbar from "./searchbar";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function Navbar(){
    return(
        <>
        <div className="container">
            <div className="left">
            <img  className="Logo" src={require("../assets/pexelslogo.png")} />
            <h2>Pexels</h2>
            </div>
        <Searchbar/>
        <div className="Right">
        <div className="dropdown">
        <button className="dropbtn">Explore</button>
            <div className="dropdown-content">
                <a href="#">Discover Photos</a>
                <a href="#">Popular Searches</a>
                <a href="#">Free Videos</a>
                <a href="#">Free Videos</a>
            </div>
        </div>
        
        <p>License</p>
        <span className="material-symbols-outlined">notifications</span>
        <img  className="upload" src={require("../assets/upload.png") } /></div>
        </div>
        </>
    );
}
export default Navbar;