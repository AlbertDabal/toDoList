const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/today", async (req, res) => {
  try {
    const todosToday = await Todo.find();
    res.json(todosToday);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    type: req.body.type,
    project: req.body.project,
    piority: req.body.piority,
    date: Date.now(),
  });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:todoId", async (req, res) => {
  try {
    const idTodo = await Todo.findById(req.params.todoId);
    res.json(idTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:todoId", async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      { $set: { status: req.body.status } }
    );
    res.json(updateTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:todoId", async (req, res) => {
  try {
    const DeleteTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(DeleteTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/edit/:todoId", async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      { $set: { name: req.body.name, piority: req.body.piority } }
    );
    res.json(updateTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
