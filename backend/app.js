const express = require("express");
const monoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());

app.use(bodyParser.json());
//Import Routes
const todoListRoute = require("./routes/todoList");
const userRoute = require("./routes/auth");

app.use("/todo", todoListRoute);

app.use("/user", userRoute);

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

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
