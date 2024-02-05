const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/demo");

const userSchema=mongoose.Schema({
  userName:String,
  Password:String,
});

module.exports=mongoose.model("user",userSchema);

