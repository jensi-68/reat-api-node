const router = require("express").Router()
const User = require("../models/userSchema")
const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js")
// register
router.post("/register", async(req,res)=>{    
    const newUser = new User({
        username:req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
        email:req.body.email

    })
    try {
        const savedUser = await newUser.save()
        console.log(savedUser);
        res.status(201).json(savedUser)
    } catch (error) {
        // console.log(error);
        res.status(500).json(error)
    }
})

// login
router.post("/login",async (req ,res)=>{
    try {
        const user = await User.findOne({username:req.body.username})
        !user && res.status(401).json("wrong credentails")
        const hashPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        const password = hashPass.toString(CryptoJS.enc.Utf8)

        const accesstoken = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin,

        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        )
        if( password != req.body.password){
            res.status(401).json("wrong credentails")
        }
        else{
            // res.status(200).json("Login Successfully")
            const {password,...others}=user._doc
            res.status(200).json({...others,accesstoken})
        }

        
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports = router;