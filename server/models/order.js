const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }, 
    
    user_id: mongoose.ObjectId,
    items: [
      {
        productId: mongoose.ObjectId,
        quantity: Number,
        title: String,
        name : String,
        category: String
      }
    ],
    amount: Number,
    currency: String,
    status: String,
    
});

module.exports = mongoose.model('Order', orderSchema);