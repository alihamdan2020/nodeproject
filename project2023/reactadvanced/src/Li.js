import React from "react";


function Li(props){
    return(
        <li option={props.id} key={props.key}>{props.name}</li>
    )
}

export default Li