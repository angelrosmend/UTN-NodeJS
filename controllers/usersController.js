const userModel = require("../models/usersModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
module.exports={

 signup: async function(req, res, next) {

 try{
  let saveUser  =  await userModel.create({
   name: req.body.name,
   user: req.body.user,
   password: req.body.password
  })
  res.json(saveUser)
 } catch(e){
  next(e)
 }
 },


 login: async function(req, res, next) {
  try{
   let user = await userModel.findOne({user:req.body.user})
   if(user){
    if(bcrypt.compareSync(req.body.password, user.password)){
    const token = jwt.sign({user:user._id}, req.app.get('secretkey'),{expiresIn: '1hr'})
    res.json({token: token})
    }else{
     res.json({mensaje: "Wrong password!"})
    }
   }else{
    res.json({mensaje: "Wrong user!"})
   }
  } catch(e){
   next(e)
  }
 }
}