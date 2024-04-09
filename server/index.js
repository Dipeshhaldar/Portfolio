const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Dipesh:DipeshHaldar@cluster0.ypmscdk.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/user", (req, res, next) => {
  EmployeeModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("Database Connected");
});
