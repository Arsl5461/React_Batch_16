const User=require("../models/user.models")
const bcrypt=require("bcryptjs")
const jwt = require('jsonwebtoken');


exports.store=async (req,res)=>{
    try{
        const payload=req.body;
        const email=await User.findOne({email:payload.email});
        if(email){
            return res.json({message:"Email Already Exist",status:409})
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(payload.password, saltRounds);
        const user = await User.create({ ...payload, password: hashedPassword });
        res.json({message:"User created Successfully",status:200,user})
        
    }
    catch(err){
        console.log(err);
    }

}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
const user =await User.findOne({email})
if(!user){
    return res.json({message:"User not found",status:404,success:false})
}
else{
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        if (result) {
            const token = jwt.sign({ userId: user._id,name:user.name}, 'Abc12345@Arslanakmal'); // Replace 'your_secret_key' with a secret key
            return res.json({message:'Password matches!',status:200,success:true,token});
        } else {
            return res.json({message:'Password does not matches!',status:403,success:false});

        }
    });
}
    }
    catch(err){
        console.log(err)
    }
}

exports.index=async(req,res)=>{
try{
const users=await User.find().sort({createdAt:-1});
res.json({status:200,message:"User Fetched Successfully",users})
    }
catch(err){
    console.log(err);
}
}
exports.get=async(req,res)=>{
    const id=req.params.id;
    try{
    const users=await User.findOne({_id:id});
    res.json({status:200,message:"User Fetched Successfully",users})
        }
    catch(err){
        console.log(err);
    }
    }
    exports.delete=async(req,res)=>{

    }
exports.delete=async(req,res)=>{
    try{
        console.log(req.params.id)
        const user=await User.findOneAndRemove({_id:req.params.id})
        if(!user){
            res.json({message:"User not found"})

        }
        res.json({message:"User Deleted Successfully!"})
    }
    catch(err){
        console.log(err)
    }

}
exports.update=async(req,res)=>{
    try{
        console.log(req.params.id)
        const user=await User.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        if(!user){
            res.json({message:"User not found"})

        }
        res.json({message:"User Updated Successfully!",user})
    }
    catch(err){
        console.log(err)
    }

}