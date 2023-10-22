const mongoose = require("mongoose")

const userSchema=mongoose.Schema({
    id:{type:String,default:""},
    name:{type:String,default:""},
    password:{type:String,default:""},
    email:{type:String,default:""},
    number:{type:String,default:""},
    isActive:{type:Boolean,default:false}
},
{timestamps:true}
)
module.exports=mongoose.model("User",userSchema)
