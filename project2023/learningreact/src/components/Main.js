import React from "react"
import Employee from "./Employee";
import Myinfo from './Myinfo'



function Main(){

    

    const employees=Myinfo.map(function(a){
        return <Employee name={a.name} email={a.email} phone={a.phone} img={a.img} />
    });

    return(
        <div className="mainContent">{employees}</div>
        
    )
}

export default Main