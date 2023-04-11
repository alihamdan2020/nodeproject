import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div className="product">
                <div>
                <img src={this.props.image} className="productImg"/>
                </div>
                <div className="productInfo">
                <h1>{this.props.name}</h1>
                <h5>{this.props.price}</h5>
                </div>
            </div>
        )
    }
}

export default Product