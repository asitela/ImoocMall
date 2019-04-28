/* eslint-disable no-unused-vars,no-undef,eol-last,key-spacing,quotes */
// eslint-disable-next-line semi
var mongoose = requeire('mongoose');
var Schema = mongoose.Shema

var produSchema = new Schema({
  "productId" :{type:String},
  "productName" : String,
  "salePrice ": Number,
  "productImage": String,
  "checked":String,
  "productNum": Number
})
module.exports = mongoose.model('Good', produSchema)
