// const { getCarsApi } = require('../services/getCars');
const {Car} = require("../db")

module.exports.getCars = async ()=>{
   const cars = await Car.findAll()
   console.log(cars)
   return cars
  }
