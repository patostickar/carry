const { getTypeDB, cartypecount } = require("../services/cartypeService");

const getType =  async (req,res,next) =>{
    try {
        const {id} = req.params
        const data = await getTypeDB(id)
        res.send(data)
    } catch (error) {
        next(error)
    }

};
const GetTypeConunt = async (req, res, next) => {
    const { locationId } = req.params;
    try {
      const count = await cartypecount(locationId)
      res.send(count);
    } catch (err) {
      next(err);
    }
  }
module.exports = {
    getType,
    GetTypeConunt
}