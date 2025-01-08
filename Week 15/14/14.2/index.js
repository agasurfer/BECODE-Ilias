const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", {title : "Homepage"})
})

app.get("/contact", (req, res) => {
    res.render("contact", {title : "Contact"})
})

app.get("/about", (req, res) => {
    res.render("about", {title : "About us"})
})



app.listen(port, ()=> {
    console.log(`Listening port ${port}`);
    
})