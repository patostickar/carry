const { getTypeDB } = require("../services/cartypes");

const getType =  async (req,res,next) =>{
    const {id} = req.params
    const data = await getTypeDB(id)
    res.send(data)

};
module.exports = {
    getType
}