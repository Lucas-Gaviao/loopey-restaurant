const express = require("express"); 
const hbs = require("hbs");

const app = express();

app.use(express.static('public')); // make everything inside /public available;

app.set("views", __dirname + "/views"); //tells our express app where to look for our views;
app.set("view engine", "hbs"); //sets HBS as the template engine;

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials;

//app.get(path, code);
//app.get(path, (request, response, next) => {})

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

app.get("/pizzas/margarita", (req, res, next) =>{
    const pizzaDetails = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        imageFile: 'pizza-margarita.jpg',
        ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
      };
     // we use the object to pass information to the new page;

    res.render("product", pizzaDetails); 
})

app.get("/pizzas/veggie", (req, res, next) =>{
    //res.send("page for veggie")
    const pizzaDetails= {
        title: 'Veggie Pizza',
        price: 15,
        recommendedDrink: 'power smoothie',
        imageFile: 'pizza-veggie.jpg',
        ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
      };

    res.render("product", pizzaDetails)
})

app.get("/pizzas/seafood", (req, res, next) =>{
    //res.send("page for pepperoni")
    const pizzaDetails = {
        title: 'Seafood Pizza',
        price: 20,
        recommendedDrink: 'white wine',
        imageFile: 'pizza-seafood.jpg',
        ingredients: ['tomato sauce', 'garlic', 'prawn'],
      };
    res.render("product", pizzaDetails)
})

//app.listen(3000); // localhost:3000/about
app.listen(3000, () => {console.log("server listening to port 3000...")});

