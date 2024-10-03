const { default: mongoose } = require("mongoose");
const {Schema}=mongoose;

const Dua = new Schema({
    duaTitle:{type:String,required:true},
    duaDes:{type:String,required:true},
    dua:{type:String,required:true},
    tarjuma:{type:String,required:true},
    
  });
  
  module.exports = mongoose.model('Duapost', Dua);
  