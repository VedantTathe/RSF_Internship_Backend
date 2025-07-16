
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  collegeAddress: {
    type: String,
    required: true,
  },
  collegeDepartment: {
    type: String,
    required: true,
  },
  collegeYear: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);