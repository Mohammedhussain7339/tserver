const { default: mongoose } = require("mongoose");
const {Schema}=mongoose;

const namazTime= new Schema({
    namazName:{type:String,required:true},
    namaztime:{type:String,required:true}
})
module.exports=mongoose.model('namaztime',namazTime)