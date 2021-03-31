const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    items : [{
        productId : String,
        quantity : Number, 
        productprice : Number
    }],
    totalprice : Number
});

module.exports = mongoose.model('Cart', cartSchema);