const { Router } = require("express");
const router = Router();

const { createCar, getCars, updateDate,updateLocation } = require("../../controllers/car");

router.get("/", async (req, res, next) => {
  try {
    const data = await getCars();
    res.send(data);
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res, next) => {
  const { locationid, carTypeid } = req.body;
  try {
    await createCar(locationid, carTypeid);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.put("/:id", async (req, res, next) => {
  // funciona para enviar 1 o 2 datos el dato que no se asigna se envia como null
  const { pickupDate, returnDate } = req.body;
  const { id } = req.params;
  try {
    updateDate(id, pickupDate, returnDate);
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
router.patch("/:id", async (req, res, next) => {
  const { locationid } = req.body;
  const { id } = req.params;
  updateLocation(id,locationid)
  res.sendStatus(200)

})

module.exports = router;
