const productosModel = require("../models/productosModels")

module.exports={

getAll: async function(req, res, next) {
 console.log(req.query)
 console.log('userToken', req.body.userToken)
 try{
  let products = await productosModel.find({})
  res.json(products)
 } catch(e){
  next(e)
 }
 },

 getById: async function(req, res, next) {
  console.log(req.params)
  try{
   let products = await productosModel.findById(req.params.id)
   res.json(products)
  } catch(e){
   next(e)
  }
 },

 create: async function(req, res, next) {
  console.log(req.body)
  try{
   let product = await productosModel({
    name: req.body.name,
    sku: req.body.sku,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity
   })
   let newProduct = await product.save()
   res.json(newProduct)
  } catch(e){
   next(e)
  }
  res.send('Products post')
 },

 update: async function(req, res, next) {
  try{
   let products = await productosModel.update({_id:req.params.id},req.body,{multi: false})
   res.json(products)
  } catch(e){
   next(e)
  }

  console.log(req.body)
  console.log(req.params)
  res.send('Product updated');
 },

 delete: async function(req, res, next) {
  try{
   let products = await productosModel.deleteOne({_id:req.params.id})
   res.json(products)
  } catch(e){
   next(e)
  }
  console.log(req.params)
  res.send('Product deleted');
 }
}