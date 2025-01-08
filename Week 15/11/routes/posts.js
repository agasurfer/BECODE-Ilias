const express = require('express');
const path = require('path');
const router = express.Router()


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..","views", "posts.html"))
});

router.post("/", (req, res) => {
    res.send({data : "post created"})
});

router.put("/", (req, res) => {
    res.send({data : "post updated"})
});

router.delete("/", (req, res) => {
    res.send({data : "post deleted"})
})

module.exports = router;