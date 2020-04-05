import React, {Component} from "react";
import Product from "../Product/Product"

export default class Dashboard extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         inventory: this.props.inventory
            
    //     }
    // }

    render(){
        let productsMapped = this.props.inventory.map((product) => {
            return <Product product={product}/>
            
        })
        return ( 
        <div>
            {productsMapped}
        </div>

        )
    }
 }

//  inventory={this.state.product}