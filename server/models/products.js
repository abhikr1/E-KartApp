const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    category: String,
    price : {
        mrp : Number,
        lp : Number
    },
    name : String
}); 
module.exports = mongoose.model('Product', productSchema);