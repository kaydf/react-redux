const getHouses = (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(result => {
    res.status(200).send(result)
    }).catch(error => {
        console.log(error)
    })
}

// const getHouses = (req, res) =>{
//     const db = req.app.get('db')

//     db.get_houses().then(result => {
//         res.status(200).send(result)
//     }).catch(error => {
//         console.log(error)
//     })
// }

const addHouse = (req, res) => {
    const {name, address, city, zip, img} = req.body
    const db = req.app.get('db')
    db.add_house(name, address, city, zip, img).then(result => {
        res.status(200).json(result)
    })
}

const deleteHouse = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_house(id).then(result => {
        res.status(200).json(result)
    }).catch(error => {
        console.log(error)
    })
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}
