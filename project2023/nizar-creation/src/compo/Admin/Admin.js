import { useEffect, useState } from "react";
import axios, { Axios } from "axios"
import { Navigate, useNavigate } from "react-router-dom";
import Data from '../Gallery/Data'

export default function Create(){
    const navigate=useNavigate();

    let [inputs,setInputs]=useState({});
    let [Dt,setDt]=useState(Data);


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
          Data.push(inputs);
          setDt(function(x){
             return [...x,inputs];
          })
         
      
        
            
        //to call php file from your server, in our case from localhost, i had create folder API with index file
        //axios function take 3 arguments, location of file and date to pass
        
    }
    return(
        <>
        <h1>Add new Image</h1>
        <form className="frm-div" onSubmit={removeSubmit}>
            <div >
              <label>img name</label>
              <input type="text" name="img" onChange={saveChange}/>
            </div>
            <div>
              <label>title</label>
              <input type="text" name="title" onChange={saveChange}/>
            </div>
            <div>
              <button>save</button>
            </div>
        </form>
        </>
    )
}