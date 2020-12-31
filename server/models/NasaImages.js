const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nasaImg = new Schema({
    url:{type:String, required : true},
    title:{type:String, required : true},
    description:{type:String, required : true}
})

const NasaImg = mongoose.model('NasaImg', nasaImg) 

module.exports = NasaImg