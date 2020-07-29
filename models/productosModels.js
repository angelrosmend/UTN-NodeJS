 const mongoose  = require('../bin/mongodb')

 const { Schema } = mongoose;

 const productosSchema = new mongoose.Schema({
  name: String,
  sku: String,
  description: String,
  price: Number,
  quantity: Number
 })

module.exports =  mongoose.model('products', productosSchema)

/**
 
 const productosSchema = new mongoose.Schema({
  title: String,
  img: String,
  price: Number,
  author: String,
  info:String,
  inCart:Boolean,
  quantity: Number,
  total: Number
 })
 */