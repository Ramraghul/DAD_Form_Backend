//Require;
const mongoose = require('mongoose')

//Schema;
const form = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    fields:[{
        name:{
            type:String,
            required:true
        },
        label:{
            type:String,
        },
        type:{
            type:String,
            required:true
        },
    }]
}, { timestamps: true });

module.exports = mongoose.model("forms", form, "allForms")

