require('dotenv').config()
const express = require("express")
const massive = require("massive")
const app = express()
const { getInventory } = require("./controller")

const { SERVER_PORT, DB_STRING } = process.env
app.use(express.json())

massive(DB_STRING)
    .then(db => {
    app.set('db', db);
    console.log('db linked')
})
    .catch(err => console.log(err) )

//endpoints
app.get("/api/inventory", getInventory);
// app.post("/api/inventory")

app.listen(SERVER_PORT, () => {
    console.log(`server has ears and is listening on the port`)
})