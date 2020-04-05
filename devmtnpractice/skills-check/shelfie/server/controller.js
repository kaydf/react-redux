const message ="It worked!!"

const getInventory = (req, res) => {
   res.status(200).json(message)
}


module.exports = {
    getInventory
}