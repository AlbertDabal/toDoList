const express = require("express");
const monoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");
const app = express();

app.use(cors());

app.use(bodyParser.json());
//Import Routes
const todoListRoute = require("./routes/todoList");

app.use("/todo", todoListRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//CONNECT TO DB
monoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to database!")
);

app.listen(3000);
