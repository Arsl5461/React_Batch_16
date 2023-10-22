const mongoose=require("mongoose")

const connect=async()=>{
    try{
        const response=await mongoose.connect('mongodb://127.0.0.1:27017/myapp'); 
        console.log("Mongodb connected successfully")
    }
    catch(err){
        console.log(err);
    }
 
}
module.exports=connect