const Product = require("../models/productsSchema")


// add products
exports.addproducts = async(req,res)=>{
    const newPro = new Product({
        name:req.body.name,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,

    })
    try {
        const savedPro = await newPro.save()
        // console.log(savedUser);
        res.status(201).json(savedPro)
    } catch (error) {
        // console.log(error);
        res.status(500).json(error)
    }
}
// get all products
exports.getAllProduct = async(req,res)=>{
    const Alldata = await Product.find()
    // console.log(Alldata);
    try {
        res.status(201).json(Alldata)
    } catch (error) {
        res.status(500).json(error)
    }
}
// get single data
exports.getProduct = async(req,res)=>{
    const singleId = await Product.findById({_id:req.params.id})
    console.log(singleId);
    try {
        res.status(201).json(singleId)
    } catch (error) {
        res.status(500).json(error)
    }
}


// update products
exports.updateproducts = async(req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            title:req.body.title,
            description:req.body.description,
        price:req.body.price
        }
    })
   
.then(result=>{
    res.status(200).json({
        message: 'Product updated successfully'
    })
})
.catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
})
}
// delete products
exports.deleteproducts = async(req,res)=>{
    Product.findByIdAndDelete({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:'product deleted',
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}

// search products
exports.searchProduct = async(req,res)=>{
    try {
        let data = await Product.find(
            {
                '$or':[
                    {"name":{$regex:req.params.key}},
                    {"title":{$regex:req.params.key}},
                    // {"latest":(req.query).sort("name")},
                    {"price":{$regex:req.params.key}}
                ]
                
            }
            )
            // latest = sort({createdAt:'desc'}),
            // console.log(latest);
            // console.log(req.params.key);
        res.send(data)
    } catch (error) {
        console.log(error);
    }
}

// module.exports = {updateproducts,deleteproducts,getProduct,getProductByName,getAllProduct}  