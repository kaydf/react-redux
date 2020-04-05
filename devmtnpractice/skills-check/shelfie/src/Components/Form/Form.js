import React, {Component} from "react";


export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }
//functions to handleChange for each input
handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
}
// a button onclick that will post new products to the database



//a button onclick to clear the input boxes 
clearInput = () => {
    this.setState = {
        name: '',
        price: 0,
        imgurl: ""
    }
}


    render(){
    return (
        <div>
            <form className="form">
                <img src={this.state.imgurl} alt="alt"/>
                <p>Image URL:</p>
                <input value={this.state.imgurl} name="imgurl" onChange={this.handleChange}/>
                <p>Product Name:</p>
                <input value={this.state.name} name="name" onChange={this.handleChange}/>
                <p>Price:</p>
                <input value={this.state.price} name="price" placeholder="0" onChange={this.handleChange}/>
                <div className="buttons">
                    <button onClick={this.clearInput}>Cancel</button>
                    <button>Add To Inventory</button>
                    
                </div>
            </form>
        </div>
    )
    }
}