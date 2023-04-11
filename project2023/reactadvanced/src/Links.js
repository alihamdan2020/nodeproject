import React from "react";
import Home from './Homemenu'

class Links extends React.Component{

    constructor(){
        super()
        this.state={
            info:Home
        }
    }

    mapping(x){
        const a=x.map(ele =>
             <li option={ele.id} key={ele.id}><a href="#">{ele.name}</a></li>
        )
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
export default Links