const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const indexPath = path.join(__dirname, "public", "index.html");
const aboutPath = path.join(__dirname, "public", "about.html");
const secretPath = path.join(__dirname, "public", "secret.html");


const verifyPassword = (req, res, next) => {
if (req.query.password === "IAmTheBigBoss") {
next();
} else {
res.send("Not authorized");
}
};


app.get("/", (req, res) => {
    res.sendFile(indexPath);
})

app.get("/about", (req, res) => {
    res.sendFile(aboutPath);
})

app.get("/secret", verifyPassword, (req, res) => {
    res.sendFile(secretPath);
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})