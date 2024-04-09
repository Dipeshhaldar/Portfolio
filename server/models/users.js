const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: String,
  description: String,
});

const EmployeeModel = mongoose.model("users", UsersSchema);

module.exports = EmployeeModel;
