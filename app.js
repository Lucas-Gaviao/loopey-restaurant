const express = require("express"); 

const app = express();

app.use(express.static('public')); // make everything inside /public available;

//app.get(path, code);
//app.get(path, (request, response, next) => {})

// GET /
app.get("/", (req, res, next) => {
    console.log("we have received a request for the HOMEPAGE");
    // console.log(request.protocol)
    // console.log(request.method)
    // console.log(request.path)
    // res.send("")
    res.sendFile(__dirname + "/views/home-page.html");  
});

// GET /contact
app.get("/contact", (req, res, next) => {
    //res.send("")
    res.sendFile(__dirname + "/views/contact-page.html");
});

//app.listen(3000); // localhost:3000/about
app.listen(3000, () => {console.log("server listening to port 3000...")});

