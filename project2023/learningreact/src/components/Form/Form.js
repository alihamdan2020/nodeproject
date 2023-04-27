import { useState } from "react";

function Form(){

    let [x,setX]=useState("");



    function handleChange(e){
        setX(function(x){
            return x=e.target.value;
        })
    
}

function handleClick(e){
    setX(function(x){
        alert(x);
    })
}

    return(
        <div>
        <h1 style={{marginBottom:'20px'}}>jawad</h1>
        <form>
            <input type="text" onChange={handleChange} style={{padding:"5px",display:'block',width:'250px'}} />
            <button type="button" onClick={handleClick} style={{marginTop:'20px',padding:'10px'}}>click me</button>
            <br></br>
            <span>{x}</span>
        </form>
        </div>
    )
}

export default Form