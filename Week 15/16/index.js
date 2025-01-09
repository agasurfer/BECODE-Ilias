const express = require('express');
const app = express();
const port = 3000;
const { v4: uuidv4 } = require("uuid");

app.use(express.json());


const users = [{
    id: uuidv4(),
    username: "Glouglou43",
    firstName: "Henrique",
    lastName: "Vieira",
    age: 35,
    isAdmin: true,
}];

const apiKey = "lqOksBdjH66fo654rgqs"


app.get("/api/users", (req, res) => {
    res.json(users);
})

app.get("/api/users/:id", (req, res) => {

    const demandedId = req.params.id
    const user = users.find(user => user.id === demandedId); 
        
    if (user) {
        res.json(user); 
        } else {
        res.status(404).json({ error: "User not found" });
        }
})

app.post("/api/users", (req, res) => {
    
    const user = req.body
    const apiKeyProvided = user.apiKey;
    if (apiKeyProvided === apiKey ) {
        const newUser = {
            id: uuidv4(),
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            isAdmin: user.isAdmin
        };
        users.push(newUser)
        res.status(201).json(newUser)
                
            
      
    } else {
        res.status(403).json({ error: "Invalid API Key" });
    }

    
})

app.delete("/api/users/:id", (req, res) => {

    const demandedId = req.params.id
    const index = users.findIndex(user => user.id === demandedId);
    const apiKeyProvided = req.body.apiKey;
    
    if (apiKeyProvided === apiKey ) {  
    if (index !== -1) {
       users.splice(index, 1)
       res.status(204).send()
        } else {
        res.status(404).json({ error: "User not found" });
        }
    }  else {
        res.status(403).json({error : "Invalid API Key"})
    } 
})

app.put("/api/users/:id", (req, res) => {

    const demandedId = req.params.id
    const userIndex = users.findIndex(user => user.id === demandedId); 

    const apiKeyProvided = req.body.apiKey;
    
    if (apiKeyProvided === apiKey ) { 
        
     if (userIndex !== -1) {
        const updatedUser = {
            
            ...users[userIndex],
            
            username: req.body.username || users[userIndex].username,
            firstName: req.body.firstName || users[userIndex].firstName,
            lastName: req.body.lastName || users[userIndex].lastName,
            age: req.body.age || users[userIndex].age,
            isAdmin: req.body.isAdmin || users[userIndex].isAdmin
        };
        users[userIndex] = updatedUser
        res.json(updatedUser);
        
        } else {
        res.status(404).json({ error: "User not found" });
        }
    } else {
        res.status(403).json({error: "Invalid API Key"})
    }
})


app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})