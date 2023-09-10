const mongoose =require('mongoose')



const userSchema = new mongoose.Schema({
    registerData :{
        type:Object,
        required:true

    }
   
}) 




module.exports =mongoose.model('userSchema',userSchema);