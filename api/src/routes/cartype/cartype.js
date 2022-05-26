const { Router } = require("express");
const { getType } = require("../../controllers/cartype");
const router = Router();
const { Cartype, Car } = require("../../db.js");



router.get("/",getType)
router.get("/count",async(req,res,next)=>{
    const { locationId } = req.body;

    const count =  await Car.count({ attributes: ['cartypeId'],where:{locationId:locationId},group: 'cartypeId'})

    res.send(count)

})
router.get("/:id",getType)

router.put("/:id", )
router.patch("/:id",)

module.exports = router;
