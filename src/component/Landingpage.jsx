import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./searchbar";
import "./Landingpage.css"
import Display from "./Display";

//onst URL=['initialPhotoURL','photoURL','initialVideoURL','videoURL','featuredURL'] 
function Landingpage(){
    return(<>
    <div className="btn-container">
        <div className="button"><h2>Home</h2></div>
        <div className="button"><h2>Photos</h2></div>
        <div className="button"><h2>Popular Videos</h2></div>
        <div className="button"><h2>Videos</h2></div>
        <div className="button"><h2>Featured</h2></div>
    </div>
    <div>
        <p className="para" style={ {fontSize:"x-Large"}}>Free Stock Photos</p>
    </div>
    </>);
}
export default Landingpage;