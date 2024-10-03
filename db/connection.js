const mongoose= require('mongoose');
const MongoURI = process.env.MONGO_URI ;
mongoose.connect( 'mongodb+srv://mohammed:mohammed@cluster0.jkkpaov.mongodb.net/tasbih')
.then(()=>{
    console.log("database is connected")
}).catch(()=>{
    console.log("database is not connected");
})
