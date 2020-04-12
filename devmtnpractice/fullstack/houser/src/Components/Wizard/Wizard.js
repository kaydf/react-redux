import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
// import Dashboard from "../Dashboard/Dashboard"


export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            zip: '',
            img: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
            console.log(this.state.name)
    }

    handleClick = () => {
        const {name, address, city, zip, img} = this.state
        axios.post("/api/home", {
            name, 
            address,
            city, 
            zip, 
            img
        }).then(response => {
            this.setState({
                name: "",
                address: "",
                city: "",
                zip: "",
                img: ""
            })
        }).catch(error => {
            console.log(error)
        })
        
        
    }

    render(){
        return (
            <>
            <div>I am the Wizard file</div>
            <input name="name" onChange={this.handleChange}  value={this.state.name} placeholder="name"></input><br /> 
            <input name="address" onChange={this.handleChange}  value={this.state.address} placeholder="address"></input> <br />
            <input name="city" onChange={this.handleChange}  value={this.state.city} placeholder="city"></input>
            <input name="zip" onChange={this.handleChange}  value={this.state.zip} placeholder="zipcode"></input>
            <input name="img" onChange={this.handleChange}  value={this.state.img} placeholder="image"></input>
            <Link to="/"><button onClick={this.handleClick}>complete</button> </Link>
            <div>
            <button><Link to="/">cancel</Link></button>
            </div>
            </>
        )
    }
}