import React, {Component} from 'react';
import './App.css';

//components
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
// import Product from "./Components/Product/Product"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [{
        name: "Purse",
        price: "100",
        imgurl: ''
      }, {
      name: 'Shirt',
      price: "400",
      imgurl: ''
      }, {
      name: "Pants",
      price: "expensive",
      imgurl: ""
      }, {
        name: "Shoes",
        price: "free",
        imgurl: ""
      }
    ]
    }
  }

  //method to get inventory from the database 

  
render(){
  return (
    <div className="App">
      <Header />
       <Dashboard inventory={this.state.inventory}/>
       {/* <Dashboard /> */}
      <Form />
      {/* <Product />
      <Product /> */}
    </div>
    );
  }
}

export default App;
