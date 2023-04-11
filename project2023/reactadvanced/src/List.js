import React, { useState } from "react";
import Li from './Li'

let counter=-1;
function List(props){

    let [myinfo,setmyinfo] = useState([]);
    
    //myinfo take the initila value of props.info
    //setmyinfo is function that used to update to initila value

    
    const a = myinfo.map(function(ele){
        return <Li key={ele.id} id={ele.id} name={ele.name}/>
    });

    
    function UpdateLinks(){
        if(counter<props.info.length-1)
        {
            counter++;
        setmyinfo(function(){    
            //[...myinfo,{}] mean add to array myinfo a new oject, as push
          return  [...myinfo,props.info[counter]];
        })
    }
    }

    return(
        <div>
            <h1>{props.title}</h1>
        <ul>{a}</ul>

        <button onClick={UpdateLinks} style={
            {
                display: props.title==="Categories" ? "block" : "none"
            }
            }>click here</button>
        </div>
    )
}

export default List