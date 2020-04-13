import React, {Component} from "react";
import {Link} from "react-router-dom";
// import axios from "axios";
// import Dashboard from "../Dashboard/Dashboard"
import store, {UPDATE_STEPONE} from "./../../store";


export default class StepOne extends Component {
    constructor(){
        const reduxState = store.getState()
        super()
        this.state = {
            img: reduxState?.img
        }
        // this.handleClick = this.handleClick.bind(this) 
        
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value})
            
    }

componentDidMount() {
    store.subscribe(() => {
const reduxState = store.getState();
this.setState({
    img: reduxState?.img
})
   
})}

    // handleClick = () => {
    //     const {img} = this.state
    //     axios.post("/api/home", {
    //         img
    //     }).then(response => {
    //         this.setState({
    //             img: ""
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //     })
        
        
    // }

    render(){
        return (
            <>
            <div>I am the StepTwo file</div>
            <p>Image URL</p>
            <input name='img' onChange={this.handleChange}  value={this.state.img} placeholder="image"></input>
            <button><Link to="/wizard/step3">Next Step</Link></button>
            </>
        )
    }
}