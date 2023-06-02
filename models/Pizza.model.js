//const {mongoose, Schema} =require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const pizzaSchema = new Schema({
    title:  {
        type: String,
        default: "abc",
        required: true
       // unique: true  --> don't allow the same info to be repeated.
    },
    price: {
        type: Number,
        required: true, // make the price required for the code to run
        min: 4            
    },
    isVeggie: {
        type: Boolean,
        default: false  // setting a default value 
    },
    dough: {
        type: String,
        enum: ["classic", "extra thin", "with cheese", "with garlic"]
    },
    ingredients: [String],
    imageFile: String
});
            
//create Model
const Pizza = mongoose.model("Pizza", pizzaSchema);


module.exports = Pizza;