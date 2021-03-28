const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    productId : {
        type : String
    },
    quantity : Number,
    price : {
        mrp : Number,
        lp : Number
    }
});

module.exports = mongoose.model('Cart', cartSchema);