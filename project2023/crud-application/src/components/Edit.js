import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Edit(){

    let [user,setUser]=useState([])

    const {id}=useParams();

    useEffect(function(){
     
        getUser();
    },[]);

    function getUser(){
        axios.get(`http://localhost:80/APIE/${id}`).then(function(response){
        setUser(response.data);
        });
    }

    return(
        <div>
        <h1>Edit</h1>
        <form>
            <input types="text" name='name' value={user[0].name}></input>
            <input types="text" name='email' value={user[0].email} ></input>
            <button>click me to update</button>
        </form>
        </div>
    )
}

export default Edit