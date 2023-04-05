const mongoose = require("mongoose");

const DB = "mongodb+srv://rafiyathanvir:Rafiya1997@cluster0.qkvvyts.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})