const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const allfund = new Schema({
  type: {type: String,required: false,unique: false,trim: false,minlength: 1},
  USDT: {type: String,required: false,unique: false,trim: false,minlength: 1},
  id: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Fund = mongoose.model("Fund",allfund)

module.exports = Fund;


