const { Router } = require("express");
const router = Router();

const { createCar, getCars,updateLocation } = require("../../controllers/car");

router.get("/", getCars);
router.get("/:id", getCars);
router.post("/",createCar)
// router.put("/:id", updateCarDate)
router.patch("/:id",updateLocation)

module.exports = router;
