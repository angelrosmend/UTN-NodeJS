const productosModel = require("../models/productosModels")

module.exports={

 getAll: async function(req, res, next) {
 console.log(req.query)

 let products = await productosModel.find({})
 res.json(products)
 },

 getById:function(req, res, next) {
  console.log(req.params)
  let products = [
   {
    id: 1,
    name: "moto g"
   },
   {
    id: 2,
    name: "moto x"
   }
  ]
  res.json(products)
 },
 create:  function(req, res, next) {
  console.log(req.body)
  res.send('Products post')
 },

 update: function(req, res, next) {
  console.log(req.body)
  console.log(req.params)
  res.send('Product updated');
 },

 delete: function(req, res, next) {
  console.log(req.params)
  res.send('Product deleted');
 }
}