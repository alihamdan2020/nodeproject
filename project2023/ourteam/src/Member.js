import React from "react";
import Members from "./Allmembers";




function Member(props){

    

    return(
        <div className="member" key={props.id}>
            <img src={props.image}/>
            <p>{props.name}</p>
            <p>{props.position}</p>
        </div>
    )
}

export default Member