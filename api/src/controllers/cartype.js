const { getTypeDB, cartypecount } = require("../services/cartypeService");
const { Cartype } = require("../db");

const getType =  async (req,res,next) =>{
    try {
        const {id} = req.params
        const data = await getTypeDB(id)
        res.send(data)
    } catch (error) {
        next(error)
    }

};
const createCartype = async (req,res,next)=>{
  try {
      const {make,model,class_code,class_name,transmission,mpg,img,doors,seats,air_conditioning,large_suitcase,small_suitcase,Price}=req.body
         const [cartype,created]= await Cartype.findOrCreate({
             where:{
              make,model,class_code,class_name,
              transmission,mpg,img,doors,seats,air_conditioning,
              large_suitcase,small_suitcase,Price
             },
           
         })
         if (created) {
             return res.status(201).send({msg:'cartype created'})
         }else{
             return res.status(406).send({msg:'There is already a cartype with this name',cartype})
         }
 
     } catch (error) {
         if (error.response) {
             res.status(error.response.status).send({msg: error.response.status});
           } else if (error.request) {
             next(error.request);
           } else {
             next(error);
           }
     } 
 }
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
    GetTypeConunt,
    createCartype
}