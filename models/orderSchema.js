const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type: String
    },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1,
            },
            title:{
                type: String,
            },
            date:{
                type:Date , default:Date.now,
            }
        }],
    price: { type: Number }
})
module.exports = mongoose.model("order",OrderSchema)