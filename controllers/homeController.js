const User = require("../models/User");

exports.getCurrentUserController =  async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Welcome!", user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
}