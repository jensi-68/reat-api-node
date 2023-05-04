const order = require("../models/orderSchema")

// order products
exports.addorder = async(req,res)=>{
    const arr = [
        {
            productId:req.params.id,
            quantity:req.body.quantity,
            
        }
    ]
    const newOrder = new order({

        userId:req.params.userId,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
        products:arr,
        name:req.body.name
    })
    try {
        const savedOrder = await newOrder.save()
        // console.log(savedUser);
        res.status(201).json(savedOrder)
    } catch (error) {
        // console.log(error);
        res.status(500).json(error)
    }
}
exports.getProductByName = async(req,res)=>{
    const singleName = await Product.find({name:req.body.name})
    // console.log(singleName.name);
    try {
        res.status(201).json(singleName)
    } catch (error) {
        res.status(500).json(error)
    }
}

// get all orders
exports.getAllOrder = async(req,res)=>{
    const AllOrder = await order.find()
    // console.log(Alldata);
    try {
        res.status(201).json(AllOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

// search by latest
exports.getLatest = async(req,res)=>{
    const latest = await order.find(req.query).sort({date:-1})
    try {
        // console.log(latest);
        res.status(201).json(latest)
    } catch (error) {
        res.status(400)
    }
}

// order history
exports.getOrderHis = async(req,res)=>{
    const userId = req.query.userId
    const orderhis = await order.find(userId)
    console.log(orderhis);
    try {
        res.status(201).json(orderhis)
    } catch (error) {
        res.status(400)
    }
}

// purchase order
exports.purchaseOrder = async(req,res)=>{
    
}

