const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

//Get todo

router.get('/', async (req, res) =>{
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(500).json({error: 'Error while fetching todos'})
    }
})

//Post todo

router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body)
        const savedTodo = await todo.save()
        res.status(201).json(savedTodo)
    }
    catch (err) {
        res.status(500).json({error: 'Error while posting todo'})
    }
})

//Update todo

router.patch('/:id', async (req, res) => {
    try {
       const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        { new: true }) //permet  d'afficher la todo updated dans la ligne suivante
         res.status(201).json(updatedTodo)
    }
    catch (err) {
        res.status(500).json({error: 'Error while updating todo'})
    }

    
})

//Delete todo

router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({deletedTodo})
    }
    catch (err) {
        res.status(500).json({error: "Error deleting todo"})
    }
})


module.exports = router;