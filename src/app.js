const express = require("express")
const app = express();
const port = process.env.PORT ||  3000;
const path = require("path");
const hbs = require("hbs");

const tempPath = path.join(__dirname,"../templates");
const partialPath = path.join(__dirname,"../templates/partials");


// using hbs and making the website dynamic
app.set("view engine","hbs");
app.set("views",tempPath);

// using hbs for partials
hbs.registerPartials(partialPath);

// public static path
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    // res.send("Welcome to thapa tehnical");
    res.render("index");
})

app.get("/about",(req,res)=>{
    // res.send("Welcome to about page of thapa tehnical");
    res.render("about");
})

app.get("/weather",(req,res)=>{
    // res.send("Welcome to weather page of thapa tehnical");
    res.render("weather");
})

app.get("*",(req,res)=>{
    // res.send("404 error page OOPs :( ");
    res.render("404error",{
        errorMessage : "Opps! Page Not Found",
    });
})

app.listen(port,()=>{
    console.log(`Listening to port no ${port}`);
})