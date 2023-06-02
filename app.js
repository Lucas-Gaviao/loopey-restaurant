const express = require("express"); 
const hbs = require("hbs");
const Pizza = require("./models/Pizza.model");
const mongoose = require("mongoose");

const app = express();

app.use(express.static('public')); // make everything inside /public available;

app.set("views", __dirname + "/views"); //tells our express app where to look for our views;
app.set("view engine", "hbs"); //sets HBS as the template engine;

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials;

mongoose
  .connect('mongodb://127.0.0.1/loopeyRestaurant')
  .then(x => {
    console.log(`Connected! Database name: "${x.connections[0].name}"`);

    //return Pizza.deleteMany({}); //WARNING: this will delete all pizzas in your DB !!
  })
//app.get(path, code);
//app.get(path, (request, response, next) => {})


/************************
 *  ROUTES **************
 ************************/

// GET /
app.get("/", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");
    // console.log(request.protocol)
    // console.log(request.method)
    // console.log(request.path)
    // res.send("")
    //res.sendFile(__dirname + "/views/home-page.html");  
    res.render("home-page");
});

// GET /contact
app.get("/contact", (req, res, next) => {
    //res.send("")
    //res.sendFile(__dirname + "/views/contact-page.html");
    res.render("contact-page");
});

app.get("/pizzas", (req, res, next) => {
   Pizza.find()
        .then((pizzasArr) => {
            //const data = {
            //      listOfPizzas: pizzasArr
            //}
            res.render("product-list", { pizzasArr } ) //converted an array into an object!
        }) 
        .catch((err) => console.log("Ops, fail on /pizzas", err))
})

// GET /pizzas/pizzaName    <------ GENERIC ROUTE
app.get("/pizzas/:pizzaName", (req, res, next) => {
    console.log(req.params.pizzaName) 
    Pizza.findOne({title: req.params.pizzaName})
        .then((rightPizza) => {
            res.render("product", rightPizza)
        })
        .catch((err) => console.log("Opss, there was an error", err))
})

/*
app.get("/pizzas/margarita", (req, res, next) =>{
  
    Pizza.findOne({title: "margarita"})
        .then((pizzaFromDB) => {
            console.log(pizzaFromDB)
            res.render("product", pizzaFromDB); 
        })
        .catch((err) => {console.log(err)
    }) 
})

app.get("/pizzas/veggie", (req, res, next) =>{
    //res.send("page for veggie")
    Pizza.findOne({title: "veggie"})
        .then((pizzaType) => {
            console.log(pizzaType)
            res.render("product", pizzaType)
    })
        .catch((err)=> {console.log(err)})
})

app.get("/pizzas/seafood", (req, res, next) =>{
    //res.send("page for pepperoni")
    Pizza.findOne({title: "seafood"})
        .then((seaPizzaType) => {
            console.log(seaPizzaType)
            res.render("product", seaPizzaType)
        })
        .catch((err) => {console.log(err);})
})

app.get("/pizzas/hawaiian", (req, res, next) => {

    Pizza.findOne({title: "hawaiian"})
        .then((hawaiianPizza) =>{
            console.log(hawaiianPizza);
            res.render("product", hawaiianPizza)
        })
        .catch((err) => {console.log(err)
    })
})
*/
//app.listen(3000); // localhost:3000/about
app.listen(3000, () => {console.log("server listening to port 3000...")});

