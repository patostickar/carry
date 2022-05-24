require('dotenv').config();
const {Car} = require('../db');
const axios = require('axios');

module.exports.getCarsApi = async () => {
   try {
     const url='http://localhost:3003/car'
     const api= await axios.get(url)
     const response=api.data
    console.log(response)
    return response  
   } catch (error) {
console.log(error)
   }
};
