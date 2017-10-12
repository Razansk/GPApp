var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    imagePath:{
        type: String, 
        required:true
    },
    title: {
            type: String,
            unique: true,
            required: true,
            index: true
        },
     price: {
            type: Number,
            required: true,
            min: 0
        },
    description:{
            type: String,
            required: true
        }
})

module.exports = mongoose.model('Products', productSchema);