const mongoose = require('mongoose')
const {Schema} = mongoose

const User = new Schema({
    username: {
        type:String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type:String,
        require: true,
        trim: true
       
    },
    confirmpassword: {
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

    role: {
        type:String,
        require: true
    },
    active: {
        type: Boolean,
        require: true
    },


})

module.exports = mongoose.model("user", User)