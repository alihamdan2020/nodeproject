import axios from "axios"
import { useState } from "react";
import User from './User';


export default function List(){

    let [user,setUser]=useState([]);

    let list_user=user.map(function(x){
        return <User name={x.name} email={x.email} />
    })

    function displayUser(){
        setUser(function(x){
            let a =axios.get('http://localhost:80/API/index.php');
            return [...x,a]
        })
    }

    return(
        <>
       <h1 onClick={displayUser}>List of all users</h1>
       <div>
{list_user}
       </div>
       </>
        
       
    )
}