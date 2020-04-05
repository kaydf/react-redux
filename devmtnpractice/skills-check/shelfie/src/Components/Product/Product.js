import React, { Component } from "react";

export default class Product extends Component {
    render() {
    return (
        <div className="products">
            <div>
            <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750" alt="products-img"/>
            </div>
            <div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.price}</p>
            </div>
        </div>
    )
}
}
// {this.props.product.imgurl}