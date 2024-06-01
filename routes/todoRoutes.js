const express = require('express')
const router = express.Router()
const { createTodo, getAllTodo, getTodoById, updateTodo, deleteTodo } = require("../controllers/todo")
router.post('/create-todo', createTodo)
router.get('/get-todos', getAllTodo)
router.get('/get-todo/:id', getTodoById)
router.put('/update-todo/:id', updateTodo)
router.delete('/delete-todo', deleteTodo)
module.exports = router