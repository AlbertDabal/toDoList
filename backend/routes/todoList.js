const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const verify = require("./verifyToken");

router.get("/", verify, async (req, res) => {
  console.log(req.user);
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/today/:day", verify, async (req, res) => {
  var tomorrow = new Date(req.params.day);
  tomorrow.setDate(tomorrow.getDate() + 1);
  try {
    const todosToday = await Todo.find({
      date: {
        $gte: new Date(req.params.day),
        $lt: tomorrow,
      },
    });
    res.json(todosToday);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", verify, async (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    type: req.body.type,
    project: req.body.project,
    piority: req.body.piority,
    description: req.body.description,
    date: req.body.date,
  });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:todoId", verify, async (req, res) => {
  try {
    const idTodo = await Todo.findById(req.params.todoId);
    res.json(idTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:todoId", verify, async (req, res) => {
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

router.delete("/:todoId", verify, async (req, res) => {
  try {
    const DeleteTodo = await Todo.deleteOne({ _id: req.params.todoId });
    res.json(DeleteTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/edit/:todoId", verify, async (req, res) => {
  try {
    const updateTodo = await Todo.updateOne(
      { _id: req.params.todoId },
      {
        $set: {
          name: req.body.name,
          description: req.body.description,
          piority: req.body.piority,
        },
      }
    );
    res.json(updateTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
