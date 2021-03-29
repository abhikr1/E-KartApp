const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
    items : [{
        productId : String,
        quantity : Number
    }],

    price : {
        mrp : Number,
        lp : Number
    }
});

module.exports = mongoose.model('Cart', cartSchema);