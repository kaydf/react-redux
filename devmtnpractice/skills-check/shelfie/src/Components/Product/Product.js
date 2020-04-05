import React, { Component } from "react";

export default class Product extends Component {
    render() {
    return (
        <div className="products">
            <div>
            <img src={this.props.product.imgurl} alt="products-img"/>
            </div>
            <div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
            </div>
        </div>
    )
}
}