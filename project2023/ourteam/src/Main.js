import React, { useState } from "react";
import Member from "./Member";
import Members from "./Allmembers";

let i=0;

function Main () {

    let [person,setprson]=useState([]);
    
    let mem=person.map(function(x){
        return <Member name={x.Name} id={x.id} position={x.position} image={x.image} />
    })
    
    const showMember=function(){
        
        if(i<Members.length){
            setprson(function(x){
                try{
                    return [...x,Members[i]]
                }
                finally{
                    i++;
                }
                
            })
        }
        else
        {
            alert("no more members");
        }
       
            // return [...x,{id:"1",Name:"jawad",position:"CEO",image:"images/pic1.jpg"}]
            
            
        
    }
    return(
        <div>
        <button onClick={showMember}>Click To Show Our Team</button>    
            <div className="main">
            {mem}
            </div>
        </div>
        
    )
}

export default Main