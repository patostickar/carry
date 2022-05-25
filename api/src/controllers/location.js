const { Op } = require("sequelize")
const {Location} = require("../db")


const getLocations = async ()=>{
    const response = await Location.findAll()
    const dataDB=response.map?.((res)=>res.dataValues)
    return dataDB
   }
    
const postLocations= async (req,res,next)=>{
    try {
     const {name,street,city,state_name,postal_code,geo,phone,time_open,time_close,airport_location}=req.body
        const [location,created]=await Location.findOrCreate({
            where:{
                name,
                street, 
                city,
                state_name,
                postal_code,
                geo,
                phone,
                time_open,
                time_close,
                airport_location
            },
          
        })
        if (created) {
            return res.status(201).send({msg:'Location created'})
        }else{
            return res.status(406).send({msg:'There is already a location with this name',location})
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

const getLocationByName=async (name)=>{
     try {
         const {dataValues}=await Location.findOne({
             where:{
                 name:{
                    [Op.iLike]:`${name}`
                 },
             }
         })
         return dataValues
     } catch (error) {
        if (error.status===404) {
            return 'Location not found by name'
       }
     }

}

const getLocationById=async(id)=>{
    try {
        const {dataValues}=await Location.findByPk(id)
        return dataValues
    } catch (error) {
        if (error.status===404) {
            return 'Location not found by id'
       }
    }
}



   module.exports={
    getLocations,
    postLocations,
    getLocationByName,
    getLocationById
   }
