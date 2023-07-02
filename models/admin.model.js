const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const alladmin = new Schema({
  Email: {type: String,required: false,unique: false,trim: false,minlength: 1},
  ratieID: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Rating: {type: String,required: false,unique: false,trim: false,minlength: 1},
  totalRating: {type: String,required: false,unique: false,trim: false,minlength: 1},
  productID: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Admin = mongoose.model("Admin",alladmin)

module.exports = Admin;


