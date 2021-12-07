const mongoose = require("mongoose");
const Joi = require("joi");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

let userSchema = new mongoose.Schema({
 
  name:String,
  age: String,
  
  date_created:{
    type:Date, default:Date.now()
  }
 
})

exports.UserModel = mongoose.model("users",userSchema);

exports.validUser = (_bodyUser) => {
  
  let joiSchema = Joi.object({
   
    name:Joi.string(),
    age:Joi.number()
    
  })

  return joiSchema.validate(_bodyUser);
}

