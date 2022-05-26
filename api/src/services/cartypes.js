const { Cartype } = require("../db");

const getTypeDB = async (id) => {
    if(id){return await Cartype.findOne({where: { id: id }})}
    const types = await Cartype.findAll()
    return types
}


module.exports = {
    getTypeDB
}