const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

/* app.use(express.static("views")) */

const data = []

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {data})
});

app.get("/add", (req, res) => {
    res.render("add")
});

app.post("/add", (req, res) => {
    data.push(req.body)
    res.redirect("/")
});

app.post("/delete/:index", (req, res) => {
    const index = req.params.index
    if (index >= 0 && index < data.length) {
        data.splice(index, 1)
    }
    res.redirect("/")
});




app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})


