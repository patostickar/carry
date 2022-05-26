const { Router } = require("express");
const { getType } = require("../../controllers/cartype");
const router = Router();



router.get("/",getType)
router.get("/:id",getType)

router.post("/",)
router.put("/:id", )
router.patch("/:id",)

module.exports = router;
