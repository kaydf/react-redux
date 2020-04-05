import React, {Component} from 'react';
import './App.css';
import axios from "axios";

//components
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
// import Product from "./Components/Product/Product"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }


//method to get inventory from the database 
componentDidMount(){
  axios.get("/api/inventory")
  .then(response => {
    this.setState({ inventory: response.data})
    console.log("it worked!!")
  // })
  }).catch(error => {
    console.log(error)
  })
}

render(){
  return (
    <div className="App">
      <Header />
       <Dashboard inventory={this.state.inventory}/>
       {/* <Dashboard /> */}
      <Form props={this.componentDidMount}/>
      {/* <Product />
      <Product /> */}
    </div>
    );
  }
}

export default App;
