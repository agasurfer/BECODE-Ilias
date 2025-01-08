const express = require('express');
const router = express.Router()
const path = require('path')

const commentsPath = path.join(__dirname, "..", "views", "comments.html") 


router.get("/", (req, res) => {
    res.sendFile(commentsPath)
});

router.post("/", (req, res) => {
    res.send({data : "comment created"})
});

router.put("/", (req, res) => {
    res.send({data : "comment updated"})
});

router.delete("/", (req, res) => {
    res.send({data : "comment deleted"})
})


module.exports = router;