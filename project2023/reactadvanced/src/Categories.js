import React from "react";
import Cat from './Category'



class Categories extends React.Component{

    constructor(){
        super()
        this.state={
            info:Cat
        }

    }

    mapping(x){
        const a=x.map(function(ele){
            return <li id={ele.id} key={ele.id}> {ele.name} </li>
        })
        return a;
    }
    render(){
        return(
           <ul>
            {this.mapping(this.state.info)}
           </ul>
        )
    }
}

export default Categories