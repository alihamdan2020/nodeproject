import { useState } from "react";
import axios, { Axios } from "axios"
import { Navigate, useNavigate } from "react-router-dom";

export default function Create(){
    const navigate=useNavigate();

    let [inputs,setInputs]=useState({});

    const saveChange=function(event){
        //take the input name
        const name=event.target.name;
        //take the input value
        const value=event.target.value;
        
        // setInputs(x =>({...x,[name]:value}))
        
        //{...x,[name]:value} mean assign the value of [name]:value to x
        setInputs(function(x){
            return ({...x,[name]:value})
        })


    }

    const removeSubmit=function(e){
        e.preventDefault();
         //to prevent clicking button to submit the form
        axios.post('http://localhost:80/API/index.php',inputs).then(function(){
          navigate('/');
        });
        
            
        //to call php file from your server, in our case from localhost, i had create folder API with index file
        //axios function take 3 arguments, location of file and date to pass
        
    }
    return(
        <>
        <h1>Create User</h1>
        <form className="frm-div" onSubmit={removeSubmit}>
            <div >
              <label>Name</label>
              <input type="text" name="name" onChange={saveChange}/>
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" onChange={saveChange}/>
            </div>
            <div>
              <label>Mobile</label>
              <input type="text" name="mobile"   />
            </div>
            <div>
              <button>save</button>
            </div>
        </form>
        </>
    )
}