import axios from "axios"
import { useState,useEffect } from "react";
import User from './User';
import Data from './Data'


export default function List(){

    let [user,setUser]=useState([]);
    
    useEffect(() => {
         getUsers()
    }, [])
    // [] mean apply the useEffect only once
    
    async function getUsers(){
        let response=await axios.get('http://localhost:80/API/')
		 setUser(response.data);
        
     
    }
    let list_user=user.map(function(x){
        return <User key={x.id} name={x.name} email={x.email} id={x.id} />
    })

    // function displayUser(){
    //     setUser(function(x){
    //         let a =axios.get('http://localhost:80/API/index.php');
    //         return [...x,a]
    //     })
    // }

    return(
        <>
       <h1>List of all users</h1>
       <div>
{list_user}
       </div>
       </>
        
       
    )
}