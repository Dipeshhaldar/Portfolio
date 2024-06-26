const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const EmployeeModel = require("./models/users");
const PORT = process.env.PORT || 3000;
const dbHOST = process.env.DBHOST;

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["https://dipeshhaldar.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));

mongoose.connect(dbHOST);

app.get("/", (req, res, next) => {
  res.send("Server Is Running");
})

app.post("/user", (req, res, next) => {
  EmployeeModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log("Database Connected");
});
