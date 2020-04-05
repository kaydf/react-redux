require('dotenv').config()
const express = require("express")
const massive = require("massive")
const app = express()
const { getInventory, addProduct } = require("./controller")

const { SERVER_PORT, DB_STRING } = process.env
//middleware
app.use(express.json())

//endpoints 
app.get("/api/inventory", getInventory)
app.post("/api/product", addProduct)

//connecting to the database 
massive(DB_STRING)
    .then(db => {
    app.set('db', db);
    console.log('db linked')
    app.listen(SERVER_PORT, () => {
        console.log(`server has ears and is listening on the port`)
    })
   
})






