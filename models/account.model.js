const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const allaccount = new Schema({
  balance: {type: String,required: false,unique: false,trim: false,minlength: 0},
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  subscribe: {type: String,required: false,unique: false,trim: false,minlength: 0},
  firstname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  lastname: {type: String,required: false,unique: false,trim: false,minlength: 0},
  password: {type: String,required: false,unique: false,trim: false,minlength: 0},
  refferal: {type: String,required: false,unique: false,trim: false,minlength: 0},
  country: {type: String,required: false,unique: false,trim: false,minlength: 0},
  status: {type: String,required: false,unique: false,trim: false,minlength: 0},
  qlink: {type: String,required: false,unique: false,trim: false,minlength: 0},
  pin: {type: String,required: false,unique: false,trim: false,minlength: 0},
  ref: {type: String,required: false,unique: false,trim: false,minlength: 0},
  usdt: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},
})

const Account = mongoose.model("Account",allaccount)

module.exports = Account;


