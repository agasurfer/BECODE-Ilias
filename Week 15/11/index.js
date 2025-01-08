const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'));

const userRoute = require("./routes/users.js");
const commentsRoute = require("./routes/comments.js");
const postsRoute = require("./routes/posts.js")

app.use('/user', userRoute)
app.use('/comments', commentsRoute)
app.use('/posts', postsRoute)

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})



app.listen(port, ()=> {
    console.log(`Listening to port ${port}`);
    
})