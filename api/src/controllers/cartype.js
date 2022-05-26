const { getTypeDB } = require("../services/cartypes");

const getType =  async (req,res,next) =>{
    try {
        const {id} = req.params
        const data = await getTypeDB(id)
        res.send(data)
    } catch (error) {
        next(error)
    }

};
module.exports = {
    getType
}