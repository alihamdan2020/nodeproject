import React from "react";
import Product from './Product'
import Mydata from './Info'

class Main extends React.Component{

    constructor (){
      super()
       this.state={
       info:Mydata
      }
    }

    mapping(x){
      const results=x.map(function(a){
        return  <Product key={a.id} name={a.name} price={a.price} image={a.img} />});
      return results;
    }
    //to write it in arrow function, note arrow function no need to return expression
    // mapping(x){
    //   const results=x.map(a =><Product key={a.id} name={a.name} price={a.price} image={a.img} />);
    //   return results;
    // }
//note 2 : map function nedd a return, but in using arrow function i remove it, return result is used for mapping method

    render(){
      

        return(
            <div className="products">
            {this.mapping(this.state.info)}
            </div>
        )
    }
}

export default Main