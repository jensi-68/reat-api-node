const router = require("express").Router()
// const Order = require("../models/orderSchema")
const {addorder,getAllOrder,getLatest,getOrderHis,purchaseOrder} = require("../controller/orderController")
const {getAllProduct} = require("../controller/addproducts")
// add order
router.post("/addorder/:userId",addorder )

// get all order
router.get('/get-all-order',getAllOrder)

// get all by latest
router.get('/getByLatest',getLatest)

// get customer by name
router.get("/customername",getAllProduct)

// get order history
router.get("/get-order-history",getOrderHis)

router.post("/purchase-order",purchaseOrder)
module.exports = router