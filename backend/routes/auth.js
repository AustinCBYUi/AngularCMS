const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = require("../models/user");
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists.." })
    }

      const newUser = new User({ username, password });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully." });

    } catch (error) {
      res.status(400).json({ message: "Server Error" });
    }
});
