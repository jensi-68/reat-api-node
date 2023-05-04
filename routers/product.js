const router = require("express").Router()
const {paginate} = require("../controller/paginatecontroller")
const {addproducts,updateproducts,deleteproducts,getProduct,getAllProduct,searchProduct} = require ("../controller/addproducts")


// add products
router.post("/addproduct",addproducts)

// single data
router.get("/singledata/:id",getProduct)

// get all products
router.get("/getallproduct",getAllProduct)

// update products
router.put('/updateproducts/:id',updateproducts);
// delete product
router.delete('/deletedata/:id',deleteproducts)

// search 
router.get('/search/:key',searchProduct)
// paginate
router.get('/paginate',paginate)
module.exports = router