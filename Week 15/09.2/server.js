const express = require('express');
const app = express();
const port = 3000; 


app.post("/", (req, res) => {
    if(req.headers.authorization === "123") {
        res.status(200).send("<h1>Hello World</h1>")
    } else {
        res.status(200).send("<h1>Not Authorized</h1>")
    }
})

app.listen(port, () => {
    console.log(`Listening at ${port}`);
    
})

