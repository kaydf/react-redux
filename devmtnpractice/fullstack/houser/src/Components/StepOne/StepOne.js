import React, {Component} from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
import store, {UPDATE_STEPONE} from "./../../store";
// import Dashboard from "../Dashboard/Dashboard"


export default class StepOne extends Component {
    constructor(){
        const reduxState = store.getState()
        super()
        this.state = {
            name: reduxState?.name,
            address: reduxState?.address,
            city: reduxState?.city,
            zip: reduxState?.zip,
            img: reduxState?.img
        }
        // this.handleClick = this.handleClick.bind(this)
       
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState?.name,
                address: reduxState?.address,
                city: reduxState?.city,
                zip: reduxState?.zip,
                img: reduxState?.img
            })
        })
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
            console.log(this.state.name)
    }

    // handleClick = () => {
    //     const {name, address, city, zip, img} = this.state
    //     axios.post("/api/home", {
    //         name, 
    //         address,
    //         city, 
    //         zip, 
    //         img
    //     }).then(response => {
    //         this.setState({
    //             name: "",
    //             address: "",
    //             city: "",
    //             zip: "",
    //             img: ""
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //     })
        
        
    // }

    handleClick = () => {
        const reduxState = store.getState()
        store.dispatch({
            type: UPDATE_STEPONE,
            payload: {
                name: reduxState?.name,
                address: reduxState?.address,
                city: reduxState?.city,
                zip: reduxState?.zip,
                img: reduxState?.img
            }
        })
    }

    render(){
        return (
            <>
            <div>I am the StepOne file</div>
            <input name="name" onChange={this.handleChange}  value={this.state.name} placeholder="name"></input><br /> 
            <input name="address" onChange={this.handleChange}  value={this.state.address} placeholder="address"></input> <br />
            <input name="city" onChange={this.handleChange}  value={this.state.city} placeholder="city"></input>
            <input name="zip" onChange={this.handleChange}  value={this.state.zip} placeholder="zipcode"></input>
            <input name="img" onChange={this.handleChange}  value={this.state.img} placeholder="image"></input>
            <Link to="/"><button onClick={this.handleClick}>complete</button> </Link>
            <button><Link to="/wizard/step2">Next Step</Link></button>
            
            <div>
            </div>
            </>
        )
    }
}