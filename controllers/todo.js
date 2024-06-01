const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
    log: ["query"],
});

const createTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        const todo = await prisma.todo.create({
            data: { title, description },
        });
        res.status(201).json({ message: "Added Todo" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

const getAllTodo = async (req, res) => {
    try {
        const allTodos = await prisma.todo.findMany()
        res.status(200).json(allTodos)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body;
        const todo = await prisma.todo.findUnique({ where: { id } })
        if (todo) {
            const todo = await prisma.todo.update({
                where: {
                    id
                },
                data: { title, description }
            })
            res.status(200).json(todo)
        } else {
            res.status(404).json({ message: "No Todo Found with this ID" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await prisma.todo.findUnique({ where: { id } })
        if (todo) {
            res.status(200).json(todo)
        } else {
            res.status(404).json({ message: "Todo Not Found" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }

}

const deleteTodo = async (req, res) => {
    try {
        const { id } = res.params
        const todo = await prisma.todo.delete({ where: { id } })
        res.status(200).json({ message: "Deleted Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message })
    }
}
module.exports = {
    createTodo,
    getAllTodo,
    updateTodo,
    getTodoById,
    deleteTodo
};
