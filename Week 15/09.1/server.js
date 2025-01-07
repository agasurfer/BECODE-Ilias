const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const path = require('path');

const indexPath = path.join(__dirname, "public", "index.html");
const aboutPath = path.join(__dirname, "public", "about.html");
const notFoundPath = path.join(__dirname, "public", "404.html");


app.use((req, res, next) => {
    
    res.on("finish", () => {
         console.log(req.method, req.url, res.statusCode);
    })
   
    
    next();
})

app.get('/', (req, res) => {
    fs.readFile(indexPath, "utf-8", (err, data) => {
         res.send(data)
    })    
 
})

app.get('/about', (req, res) => {
    fs.readFile(aboutPath, "utf-8", (err, data) => {
         res.send(data)
    })    
 
})

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.post("/", (req, res) => {
    res.json({
    school: "BeCode",
    year: "2023"
})
})

 app.use((req, res, next) => {
    fs.readFile(notFoundPath, "utf-8", (err, data) => {
        res.status(404).send(data)
    })
 
}) 
 
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})