const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
    category: {
        type : String
    },
    name : String
});

module.exports = mongoose.model('Category', categorySchema);