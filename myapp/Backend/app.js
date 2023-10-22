const express=require("express")
const port=8000
const app=express();
const connect=require("./config")
const userRoute=require("./routes/user.route")
var bodyParser = require('body-parser')
var cors=require("cors")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// parse application/json
app.use(bodyParser.json())
connect();
app.use("/user",userRoute)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
