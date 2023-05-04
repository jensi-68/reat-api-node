const mongoose = require("mongoose")

const cartschema = new mongoose.Schema({
    userId: {
        type: String,
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
            }
        }],
    price: { type: Number }
})
module.exports = mongoose.model("addtocart",cartschema)