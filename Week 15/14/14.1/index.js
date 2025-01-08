const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const posts = [
   {
    title: "Post one",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "King Philippe",
  },
  {
    title: "Post two",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Barack Obama",
  },
  {
    title: "Post three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
    author: "Nelson Mandela",
  },
];

app.get("/", (req, res) => {
    res.render("index", {posts})
})



app.listen(port, () => {
    console.log(`Listening to port ${3000}`);
    
})

