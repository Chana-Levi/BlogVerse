const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');

// טוען את המשתנים מה- `.env`
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// הדפסת המפתח לבדיקה
console.log('Your API Key:', process.env.OPENAI_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
