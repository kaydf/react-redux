import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
// import Dashboard from "../Dashboard/Dashboard"
import store, {UPDATE_STEPTHREE} from "./../../store";


export default class StepOne extends Component {
    constructor(){
        const reduxState = store.getState()
        super()
        this.state = {
            mortgage: reduxState?.mortgage,
            rent: reduxState?.rent
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        const {mortgage, rent} = this.state
        axios.post("/api/home", {
            mortgage,
            rent
        }).then(response => {
            this.setState({
               mortgage: 0,
               rent: 0
            })
        }).catch(error => {
            console.log(error)
        })
        
        
    }

    componentDidMount() {
        store.subscribe(() => {
    const reduxState = store.getState();
    this.setState({
        mortgage: reduxState?.mortgage,
        rent: reduxState?.rent
    })
       
    })}



    render(){
        return (
            <>
            <div>I am the StepThree file</div>
                <p>Monthly Mortgage Amount</p>
            <input name="mortgage" onChange={this.handleChange} value={this.state.mortgage} placeholder="0"></input>
                 <p>Desired Monthly Rent</p>
            <input name="rent" onChange={this.handleChange} value={this.state.rent} placeholder="0"></input>
            <Link to="/"><button onClick={this.handleClick}>complete</button> </Link>
            </>
        )
    }
}