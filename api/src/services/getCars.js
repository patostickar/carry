require('dotenv').config();
const {Car} = require('../db');
const axios = require('axios');

module.exports.getCars = async () => {
   try {
     const url='http://localhost:3003/car'

     const api= await axios.get(url)
     const response=api.data
     console.log(response)
     console.log('Prueba exitosa')
   } catch (error) {
console.log(error)
   }
};
