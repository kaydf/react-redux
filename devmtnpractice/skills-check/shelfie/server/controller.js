const getInventory = (req, res) => {
    const db = req.app.get('db')
    db.inventory.get_inventory(req.params.inventory_id).then(dbresponse => res.status(200).json(dbresponse))
}


module.exports = {
    getInventory
 
}