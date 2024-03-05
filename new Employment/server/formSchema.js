const mongoose = require('mongoose')
const {Schema} = mongoose

const Details = new Schema({
   
    username: {
        type:String,
        require: true,
        trim: true
    },
    firstname: {
        type:String,
        require: true,
        trim: true
    },
    middlename: {
        type:String,
        require: true,
        trim: true
    },
    lastname: {
        type:String,
        require: true,
        trim: true
    },
    email: {
        type:String,
        require: true,
        trim: true
    },
    dob: {
        type:String,
        require: true,
        trim: true
    },
    phonenumber: {
        type:String,
        require: true,
        trim: true
    },
    ssn: {
        type:Number,
        require: true,
        trim: true
    },



})

module.exports = mongoose.model("detail", Details)