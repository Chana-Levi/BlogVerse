const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
let users = []; // בסיס נתונים זמני בזיכרון (in-memory)

// מסלול רישום
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // בדיקה אם המשתמש כבר קיים
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // הצפנת סיסמה ושמירת המשתמש
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully!' });
});

// מסלול התחברות
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // חיפוש המשתמש
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // השוואת סיסמה
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  // יצירת טוקן
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

module.exports = router;
