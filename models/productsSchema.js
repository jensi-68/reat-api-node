const mongoose = require("mongoose")

const productschema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        title:{
            type:String,
        },
        description:{
            type:String,
        },
        price:{
            type:String,
        }

    },
    {timestamps:true}
)
module.exports = mongoose.model("product", productschema)