const express = require('express');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const port = 3000;

const app = express();
app.use(express.json());

const url = "mongodb://localhost:27017"
let db

const startServer = async()=> {
    try {
        const client = await MongoClient.connect(url)
        db = client.db('blog');
        
        app.listen(port, ()=> {
            console.log(`Listening at ${port}`);
            
        })
    } catch (err) {
        console.log(err);
        
    }
}

startServer();

app.get('/blog', (req, res) => {

    const users = [];

    db.collection('users')
    .find()
    .forEach(user => users.push(user))
    .then(()=> {
        res.status(200).json(users)
    })
    .catch((err) => {
        res.status(500).json({mssg : "Error fetching users"})
    })

});

app.get('/blog/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)) {

        db.collection('users')
    .findOne({_id : new ObjectId(req.params.id)})
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        res.status(500).json({err: 'Error fetching user'})
    })
    } else {
        res.json({err : "Id is not valid"})
    }

    
})

app.post('/blog', (req, res) => {

    const newUser = req.body

    db.collection('users')
    .insertOne(newUser)
    .then((result) =>{
        res.status(201).json(result)
    })
    .catch((err)=> {
        res.status(500).json({err : "Error creating user"})
    })
})

app.patch('/blog/:id', (req, res) => {

    if(ObjectId.isValid(req.params.id)){
         const updatedUser = req.body

    db.collection('users')
    .updateOne({_id : new ObjectId(req.params.id)}, {$set : updatedUser})
    .then((result) => res.json({ msg: "User updated", result }))
    .catch((err) => {
        res.status(500).json({error: 'Could not update user' })
    })
    } else {
        res.json({error: 'Id is not valid'})
    }

   
})

app.delete('/blog/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        
        db.collection('users')
        .deleteOne({_id: new ObjectId(req.params.id)})
        .then((result) => res.status(200).json({msg : 'User deleted', result}))
        .catch((err) =>{
            res.status(500).json({error: "Could not delete user"})
        })
    } else {
        res.status(500).json({error: "Id is not valid"})
    }
})