const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

const todosRoutes = require('./routes/todos');

const port = 3000;

//Middlewares

app.use(express.json())

app.use(cors());


//Connect to Db

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolist');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};
connectToDatabase();

//Routes

app.use('/api/todos', todosRoutes);

//Server init

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
    
})
