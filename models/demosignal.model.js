const mongoose = require('mongoose');
//const collection = mongodb.db("myDB").collection("myCollection");
const Schema = mongoose.Schema;
  
const alldemosignal = new Schema({
  signal: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Bitcoin: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Ethereum: {type: String,required: false,unique: false,trim: false,minlength: 1},
  eur_jpy: {type: String,required: false,unique: false,trim: false,minlength: 1},
  usd_chf: {type: String,required: false,unique: false,trim: false,minlength: 1},
  aud_cad: {type: String,required: false,unique: false,trim: false,minlength: 1},
  eur_usd: {type: String,required: false,unique: false,trim: false,minlength: 1},
  chf_jpy: {type: String,required: false,unique: false,trim: false,minlength: 1},
  NG: {type: String,required: false,unique: false,trim: false,minlength: 1},
  WCO: {type: String,required: false,unique: false,trim: false,minlength: 1},
  BO: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Silver: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Platinum: {type: String,required: false,unique: false,trim: false,minlength: 1},
  Gold: {type: String,required: false,unique: false,trim: false,minlength: 1},
})

const Demosignal = mongoose.model("Demosignal",alldemosignal)

module.exports = Demosignal;


