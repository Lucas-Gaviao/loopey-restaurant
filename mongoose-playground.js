const mongoose = require("mongoose");

const Pizza = require("./models/Pizza.model");


mongoose.connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
    .then((response) => {
        console.log(
            `Connected to Mongo! Database Name: "${response.connections[0].name}"`);

            //create a new document (a new pizza)
            //Pizza.create({title: "margarita"});

            const pizzaOne = {
                title: "veggie",
                price: 12,
                isVeggie: true
            };
            return Pizza.create(pizzaOne);
    })
    .then((pizzaFromDB) => {
        console.log("we are ready to eat our pizza!");
        //return Pizza.find()
        return Pizza.find({title: "veggie"})
    })
    .then((pizzasArr) => {
        console.log(pizzasArr)

        //Model.findByIdAndUpdate(id, update [, options])
        // Pizza.findByIdAndUpdate("6478ab28253a612d34d1b97f", {price: 20}, { returnDocument: 'after' })

        Pizza.updateMany({price: {$gt: 12} }, {dough: "with garlic"});
    })
    .catch((err) => {console.log("Error connecting to DB", err)});


