import React, {Component} from "react";
import House from "../House/House"
import  {Link} from "react-router-dom";
// import Wizard from "../Wizard/Wizard"
import axios from "axios";

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get("/api/houses")
        .then(response => {
            this.setState({
            houses: response.data
        })
    })
        .catch(error =>{
            console.log(error)
        })
    }
 
    deleteHouse = (id) => {
        axios.delete(`/api/home/${id}`)
        .then(() => this.getHouses())
    }


    render() {
        let list = this.state.houses.map((element) => {
            return <House key={element.id} val={element} method={this.deleteHouse}/>
        })
        return (
       <>
                <div>
                    <div class="border dashboard">
            <h1>Dashboard</h1>
            <Link to="/wizard/step1"><button className="addToProperty">Add New Property</button></Link>
            </div>
            </div>
                    <div className="list">
                    <h2>Home Listings</h2>
                    {list}
                    </div>
        </>
           )
                
             
           
        }
    
    }


