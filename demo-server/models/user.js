/* eslint-disable eol-last,no-unused-vars,key-spacing,quotes */
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  "userId": String,
  "userName": String,
  "userPwd": String,
  "orderList": Array,
  "cartList": [
    {
      "productId" :{type:String},
      "productName" : String,
      "salePrice ": Number,
      "productImage": String,
      "checked":String,
      "productNum": Number
    }
  ],
  "addressList": [
    {
      "addressId": String,
      "userName": String,
      "streetName": String,
      "postCode": Number,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
})
module.exports = mongoose.model("User", userSchema)
