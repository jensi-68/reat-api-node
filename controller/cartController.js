const cart = require("../models/cartSchema")
exports.add_to_cart = async(req,res)=>{
    const arr = [
        {
            productId:req.params.id,
            quantity:req.body.quantity,
            
        }
    ]
    const Cart_obj =  new cart({
        price:req.body.price,
        name:req.body.name,
        quantity:req.body.quantity,
        title:req.body.title,
        userId:req.body.userId,
        products:arr
    })
  try {
    
    const cartData = await Cart_obj.save()
    res.status(200).json(cartData)

  } catch (error) {
    res.status(400).send({msg:error.message,success:false})
  }
}
