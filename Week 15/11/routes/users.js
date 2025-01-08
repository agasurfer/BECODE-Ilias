const express = require('express');
const router = express.Router()
const path = require('path');

const usersPath = path.join(__dirname,"..", "views", "users.html")


router.get("/", (req, res) => {
    res.sendFile(usersPath)
});

router.post("/", (req, res) => {
    res.send({data : "user created"})
});

router.put("/", (req, res) => {
    res.send({data : "user updated"})
});

router.delete("/", (req, res) => {
    res.send({data : "user deleted"})
})

module.exports = router;