const User = require("../models/user.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Registration
exports.register = (req, res) => {
  let reqBody = req.body;

  // Hash the password
  bcrypt.hash(reqBody.password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ status: "fail", error: "Password hashing failed" });
    } else {
      // Update the request body with the hashed password
      reqBody.password = hashedPassword;

      User.create(reqBody, (err, data) => {
        if (err) {
          res.status(200).json({ status: "fail", data: err });
        } else {
          res.status(200).json({ status: "success", data: data });
        }
      });
    }
  });
};


//Login

exports.login = (req, res) => {
  let reqBody = req.body;
  
  User.aggregate([
    { $match: { email: reqBody.email } },
    { $project: { _id: 0, name: 1, email: 1, password: 1 } }
  ], async (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      if (data.length > 0) {
        const user = data[0];
        try {
          const isMatch = await bcrypt.compare(reqBody.password, user.password);
          if (isMatch) {
            const token = jwt.sign({ email: user.email }, 'SecretKey123456789');
            res.status(200).json({ status: "success", token: token, data: user });
          } else {
            res.status(401).json({ status: "unauthorized" });
          }
        } catch (error) {
          res.status(500).json({ status: "error", message: "Password comparison failed" });
        }
      } else {
        res.status(401).json({ status: "unauthorized" });
      }
    }
  });
};