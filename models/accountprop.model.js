const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const allaccountprop = new Schema({
  email: {type: String,required: false,unique: false,trim: false,minlength: 0},
  credit: {type: String,required: false,unique: false,trim: false,minlength: 0},
  rewards: {type: String,required: false,unique: false,trim: false,minlength: 0},
  projects: {type: String,required: false,unique: false,trim: false,minlength: 0},
  Perfomance: {type: String,required: false,unique: false,trim: false,minlength: 0},
  sub: {type: String,required: false,unique: false,trim: false,minlength: 0},
  id: {type: String,required: false,unique: false,trim: false,minlength: 0},

})

const Accountprop = mongoose.model("Accountprop",allaccountprop)

module.exports = Accountprop;


