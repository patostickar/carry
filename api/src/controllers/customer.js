const { Op } = require("sequelize")
const {Customer} = require("../db")

const getCustomers = async ()=>{
    const response = await Customer.findAll()
    const dataDB=response.map?.((res)=>res.dataValues)
    return dataDB
   }


const postCustomer= async (req,res,next)=>{
    try {
     const {email,first_name,last_name,street,city,phone,postal_code,password,isAdmin,isPremium,isBanned}=req.body
        const [customer,created]=await Customer.findOrCreate({
            where:{
                email,first_name,last_name,street,city,phone,postal_code,password,isAdmin,isPremium,isBanned
            },
          
        })
        if (created) {
            return res.status(201).send({msg:'Customer created'})
        }else{
            return res.status(406).send({msg:'There is already a customer with this name',customer})
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


const getCustomerById=async(id)=>{
   try {
       const {dataValues}=await Customer.findByPk(id)
       return dataValues
   } catch (error) {
       if (error.status===404) {
           return 'Customer not found by id'
      }
   }
}

const putCustomer=async (id,req)=>{

    const {email,first_name,last_name,street,city,phone,postal_code,password,isAdmin,isPremium,isBanned}=req.body
   
    try {
        const customer=await Customer.findOne({where:{id}})
          if (customer) {
        return   await customer.update({
            email,first_name,last_name,street,city,phone,postal_code,password,isAdmin,isPremium,isBanned
            })
           
        }
       
    } catch (error) {
        if (error.status===404) {
            return 'Customer not found by id'
       }
}
}


module.exports={
    getCustomers,
    postCustomer,
    getCustomerById,
    putCustomer
}