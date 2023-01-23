import React ,{ useState }from "react";
import "./searchbar.css";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function Searchbar(){
    const [Term,SetTerm] = useState("");
    function clicked(e){
        e.preventDefault();
        console.log(Term)}
        
    return(
        <form >
        <div className="searchbar" >
            
            <input className="input" type="text" placeholder="Search for free photos" onChange={(e)=>{SetTerm(e.target.value)}}/>
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

<span class="material-symbols-outlined">
search
</span>