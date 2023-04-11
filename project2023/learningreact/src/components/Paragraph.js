import React from "react";

function MyParagraph() {
    const test="b";
    
    let colors={
        a:"red",
        b:"blue"
    }
    ;
    return(
        <p className="text">
       hi {test=="a" ? <span style={{color:colors.a}}>Programmer</span> : <span style={{color:colors.b}}>accounter</span>} 
       &nbsp; hello {test=="a" ? <span style={{color:colors.a}}>Programmer</span> : <span style={{color:colors.b}}>accounter</span>} 
       </p>
    );
}




export default MyParagraph;