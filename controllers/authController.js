const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const {
    username,
    name,
    email,
    password,
    phoneNumber,
    gender,
    collegeName,
    collegeAddress,
    collegeDepartment,
    collegeYear
  } = req.body;

  let err = "";
  if(!username)
  {
    err+="Uername, ";
  }
  if(!email)
  {
    err+="email, ";
  }
  if(!password)
  {
    err+="password, ";
  }

  if (!username || !email || !password) {
    return res.status(400).json({ error: `${err} is required.`});
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      gender,
      collegeName,
      collegeAddress,
      collegeDepartment,
      collegeYear
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({ error: "Signup failed due to server error." });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
