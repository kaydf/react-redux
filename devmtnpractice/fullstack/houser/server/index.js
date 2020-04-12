require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive')
const {DB_STRING} = process.env;
const { getHouses, addHouse, deleteHouse } = require("./controller")

massive(DB_STRING)
    .then(db => {
    app.set('db', db);
    console.log('db linked')
})
    .catch(err => console.log(err) )

    app.use(express.json())

//endpoints
app.get('/api/houses', getHouses)
app.post('/api/home', addHouse)
app.delete('/api/home/:id', deleteHouse)



app.listen(4000, () => {
    console.log("server listening")
})

