const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const userRoute = require("./routers/user")
const authRoute = require("./routers/auth")
const productRoute = require("./routers/product")
const orderRoute = require("./routers/order")
const cartRouter = require("./routers/cart")
const userRouter = require("./routers/user")
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("db con success")).catch((err)=>console.log(err))
app.use(express.json())
app.get("/",()=>{
    console.log("test is successfull");
})

app.use("/api",userRoute)
app.use("/api",authRoute)
app.use("/api/admin",productRoute)
app.use("/api/admin",orderRoute)
app.use("/api/user",cartRouter)
app.use("/api/user",userRouter)

app.listen(process.env.PORT ||  5000,()=>{
    console.log("backend server is running");
})