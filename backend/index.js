const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: ['http://localhost:3000', 'https://blogversefrontend.azurewebsites.net','http://blogversefrontend.azurewebsites.net'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


console.log('Your API Key:', process.env.OPENAI_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
