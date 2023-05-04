const router = require("express").Router()
const {add_to_cart} = require("../controller/cartController")
const { paginate } = require("../controller/paginatecontroller")

router.post("/:id",add_to_cart)


module.exports = router