const mongoose = require('mongoose');


const portfolioSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    message:String,
})


module.exports = mongoose.model('detail',portfolioSchema);