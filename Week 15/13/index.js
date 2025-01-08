const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

app.get("/", (req, res) => {
    res.render("index", {
        time : `${hours}: ${formattedMinutes}`
    })
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
    
})