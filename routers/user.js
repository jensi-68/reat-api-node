const { getAllProduct, searchProduct, getProduct } = require("../controller/addproducts");
const { getLatest, getOrderHis } = require("../controller/orderController");
const { paginate } = require("../controller/paginatecontroller");
const userSchema = require("../models/userSchema");
// const verifyToken = require("./verifyToken");

const router = require("express").Router();
// paginate user
router.get('/paginate/:userId',paginate)

// get all by latest
router.get('/getByLatest/:userId',getLatest)

router.get("/customername/:userId",getAllProduct)

// get order history
router.get("/get-order-history/:userId",getOrderHis)

// search 
router.get('/search/:userId/:key',searchProduct)

// single data
router.get("/singledata/:userId/:id",getProduct)

module.exports = router;